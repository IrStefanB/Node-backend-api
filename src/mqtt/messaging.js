const connection = require('./connection');
const mqtt = new connection(['/status/light', '/sensors/light']);//list of subscribed topic`s (topic/topic array/topic object) 
const socketEvents = require('../socket/events');

class Subscription {
    constructor () {
        mqtt.client.on('message', function (topic, message) {
            console.log('topic: ' + topic + ' message: ' + message);
            socketEvents.mqEvent( 'topic: ' + topic + ' message: ' + message );
        }) 
    }
}

const sub = new Subscription(); //temporary
module.exports = sub;