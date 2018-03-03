const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://192.168.0.110:6026');
class Connection {
    constructor (topic){
        const self = this;
        self.client = client;
        self.topic = topic;

        self.client.on('connect', function () {
            self.client.subscribe(self.topic);
            self.client.publish('presence', 'Hello mqtt');
            console.log('mqtt connection established...');
    })

        self.endConnection = () => {
            self.client.end()
        }
    }
}

//const qttConnection = new Connection();

module.exports = Connection;


