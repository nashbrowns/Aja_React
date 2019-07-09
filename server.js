const express = require("express");
const mongoose = require("mongoose");
const http = require('http');

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Socket.io ----------------------------------------------
const server = http.createServer(app);
const io = require('socket.io').listen(server);

io.on('connection', (client) => {
  console.log('user connected');

  client.on('disconnect', function(){
    console.log('user disconnected');
  });

  client.on('device', function(MAC){
    io.emit('device', MAC);
  });

  client.on('light', function(lightState){
    io.emit('light', lightState);
  })

});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aja",{ useNewUrlParser: true });

db.User.create({ 
  firstName: "Nash",
  lastName: "McDonald",
  email: "nash@email.com",
  password: "1234"})
  .then(function(dbUser) {

    console.log(dbUser);

    db.Device.create({
      MAC: "1234"
    }).then(function(dbDevice){
  
      console.log(dbDevice);
      return db.User.findOneAndUpdate({}, { $push: { deviceList: dbDevice._id } }, { new: true });
    })
    .then(function(dbUser) {
      // If the User was updated successfully, send it back to the client
      console.log(dbUser);
    })
    .catch(function(err) {
      console.log(err.message);
    });

  })
  .catch(function(err) {
    console.log(err.message);
  });

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
