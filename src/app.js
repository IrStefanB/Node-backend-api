//import express
const express = require('express');

//setup express
const app = express();

//listen for requests
app.listen(process.env.port || 3000, () => {
  console.log('listening for requests...');
})
