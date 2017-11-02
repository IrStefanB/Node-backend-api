//  import express
const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

//  setup express
const app = express();

// body parser middleware
app.use(bodyParser.json());

//  init routes
app.use('/api', routes);

//  listen for requests
app.listen(process.env.port || 3000, () => {
  console.log('listening for requests...');
})
