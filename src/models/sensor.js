const mongoose = require('mongoose');

// data structure
const Schema = mongoose.Schema;

// create test sensor Schema & Model
    // Schema
const SensorSchema = new Schema({
    name: {
        type: String,
        // second param for feeback
        required: [true, 'Name field is required'],
    },
    dataType: {
        type: String
    },
    available: {
        type: Boolean,
        // when adding a new entry gets by default available false
        default: false
    }
    
});
    // Model
const Sensor = mongoose.model('Sensor', SensorSchema); //The string is the name of the collection in the db

// export module
module.exports = Sensor; 