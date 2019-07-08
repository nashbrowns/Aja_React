const express = require("express");
const mongoose = require("mongoose");
//const routes = require("./routes");
//const passport = require("passport");
const http = require('http');

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

//Passport Strategy
// require("./client/src/Passport/passport")(passport);
// app.use(passport.initialize());
// app.use(passport.session());
// const authRoutes = require("./routes/auth");
// app.use("/auth", authRoutes);
// // //Declare Global Variables
// app.use((req, resp, next) => {
//   resp.locals.user = req.user || null;
//   next();
// });

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aja",{ useNewUrlParser: true });

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
