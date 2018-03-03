const connection = require('./connection');
const mqtt = new connection(['/status/light']);//list of subscribed topic`s (topic/topic array/topic object) 

class Subscription {
    constructor () {
        mqtt.client.on('message', function (topic, message) {
            // message is Buffer
            console.log('topic: ' + topic + ' message: ' + message);
        }) 
    }
}
const sub = new Subscription(); //temporary
module.exports = sub;