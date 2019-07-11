/* npm modules */
const express = require("express");

const mongoose = require("mongoose");
const http = require('http');

/* route import */
const routes = require("./routes");

/* database model import */
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

// Add routes, both API and view
app.use(routes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
