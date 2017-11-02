// import express
const express = require('express');

// setup router
const router = express.Router();

// test GET route 
router.get('/main', (req, res) => {
    res.send({type : 'GET'});
})

// test POST route 
router.post('/main', (req, res) => {
    console.log(req.body);
    res.send({
        type : 'POST',
        name : req.body.name
    });
})

// test PUT route 
router.put('/main/:id', (req, res) => {
    res.send({type : 'PUT'});
})

// test DELETE route 
router.delete('/main/:id', (req, res) => {
    res.send({type : 'DELETE'});
})

// export module
module.exports = router;