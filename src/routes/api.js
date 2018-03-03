// import express
const express = require('express');

// setup router
const router = express.Router();

//  import sensor model
const Sensor = require('../models/sensor')

// GET route 
router.get('/sensors/name/:name', (req, res) => {
   Sensor.findOne(req.params).then( (err, sensor) => {
        if (err) return res.status(500).send(err);
        sensor ? res.send( sensor ) : res.send( "query not found" );          
  });
})

// POST route 
router.post('/sensors', (req, res, next) => {
    // creates a new sensor entry based on the request and saves it to the db and returns a promise
    console.log(req.body);
    Sensor.create(req.body)
    .then( (data) => {
        res.send(data);
    })
    .catch(next);
});

// PUT route 
router.put('/sensors/:id', (req, res, next) => {
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
router.delete('/sensors/:id', (req, res, next) => {
    Sensor.findByIdAndRemove({_id : req.params.id})
    .then( (data) => {
        res.send(data);
    })
    .catch(next);  
});

// export module
module.exports = router;