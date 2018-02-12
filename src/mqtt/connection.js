const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://192.168.0.110:6026');
client.on('connect', function () {
    client.subscribe('/status/light')
    client.publish('presence', 'Hello mqtt');
})

client.on('message', function (topic, message) {
    // message is Buffer
    client.end()
})

module.exports = mqtt;


