class Connection {
    constructor (){
        let self = this;
        self.mqtt = require('mqtt');
        self.client  = this.mqtt.connect('mqtt://192.168.0.110:6026');

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


