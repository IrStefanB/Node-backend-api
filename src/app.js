//  imports
  //  import express
const express = require('express');
  //  define routes importing api.js
const routes = require('./routes/api');
  //  import body-parser
const bodyParser = require('body-parser');
//  import mqtt connection setup
const mqtt = require('./mqtt/connection');
//  import logic for managing mq messaging
const mqMessaging = require('./mqtt/messaging');
//  setup express
const app = express();
// mongo db connection
const mongoDbConnection = require('./mongodb/connection');
//socket io
//const socketIo = require('socket.io');
//const ws = require(ws)
// socket events
const socketEvents = require('./socket/events');

const connectToSock = require('./socket/connection');
// use body parser middleware to parse the body of the request as json
app.use(bodyParser.json());

//  init routes
app.use('/api', routes);

// use static middleware to serve files

////// Old route to static
//app.use(express.static('../../webapp/src'));
//////
//app.use(express.static('../../webapp/src'));

// error handling middleware
app.use( (err, req, res, next) => {
  res.status(422).send({error: err.message}); //changes the status 200 to 422 and shows the error message
})

//  listen for requests
const server = app.listen(process.env.port || 3000, () => {
  console.log('listening for requests...');
})

//connectToSock(server);

