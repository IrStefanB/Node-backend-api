//  imports
  //  import express
const express = require('express');
  //  define routes importing api.js
const routes = require('./routes/api');
  //  import body-parser
const bodyParser = require('body-parser');
//  import mqtt connection setup
const mqtt = require('./mqtt/connection');
//  setup express
const app = express();
// mongo db connection
const mongoDbConnection = require('./mongodb/connection');

// use body parser middleware to parse the body of the request as json
app.use(bodyParser.json());

//  init routes
app.use('/api', routes);

// use static middleware to serve files
app.use(express.static('../../webapp/src'));

// error handling middleware
app.use( (err, req, res, next) => {
  res.status(422).send({error: err.message}); //changes the status 200 to 422 and shows the error message
})

//  listen for requests
app.listen(process.env.port || 3000, () => {
  console.log('listening for requests...');
})
