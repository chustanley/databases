
var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var cors = require('cors');

// Router
var router = require('./routes.js'); // imported the route

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Set up our routes
app.use('/classes', router); //This allows you to use the routes

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port')); // MAKES THIS SERVER LISTEN TO THE REQUEST TO THIS PORT!!!!
  console.log('Listening on', app.get('port'));
}

/*
app.js will be the entrypoint for your Node.js web server code and utilizes

Main server MIGHT HAVE TO DO SOME EXPRESS RESEARCH
*/