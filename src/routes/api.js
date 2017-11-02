// import express
const express = require('express');

// setup router
const router = express.Router();

//  import sensor model
const Sensor = require('../models/sensor')

// test GET route 
router.get('/main', (req, res) => {
    res.send({type : 'GET'});
})

// POST route 
router.post('/main', (req, res, next) => {
    // creates a new sensor entry based on the request and saves it to the db and returns a promise
    Sensor.create(req.body)
    .then( (data) => {
        res.send(data);
    })
    .catch(next);
});

// PUT route 
router.put('/main/:id', (req, res, next) => {
    Sensor.findByIdAndUpdate({_id : req.params.id}, req.body)
    .then( () => {
        Sensor.findOne({_id : req.params.id})
        .then( (data) => {
            res.send(data);
        });
    })
    .catch(next);  
})

// DELETE route 
router.delete('/main/:id', (req, res, next) => {
    Sensor.findByIdAndRemove({_id : req.params.id})
    .then( (data) => {
        res.send(data);
    })
    .catch(next);  
});

// export module
module.exports = router;