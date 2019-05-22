//  import mongoose to connect to mongodb
const mongoose = require('mongoose');

const connection = () => {
    // connect to mongodb
    mongoose.connect('mongodb://localhost/sensors', {useMongoClient: true});
    // override mongoose promise to global node promise since is deprecated 
    mongoose.Promise = global.Promise;

    // mongo db connection status
    mongoose.connection.once('open', () => {
        console.log('mongoDb connection established...')
    }).on('error', (error) => {
        console.log(`MongoDB error: ${error}`);
    });
}

module.exports = connection();