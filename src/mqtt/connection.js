const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://192.168.0.110:6026');
class Connection {
    constructor (){
        const self = this;
        self.mqtt = mqtt;
        self.client = client;

        self.client.on('connect', function () {
            self.client.subscribe('/status/light')
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


