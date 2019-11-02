//const socketIo = require('socket.io');
const wss = require('./connection')
const mqMessaging = require('../mqtt/messaging');
let openedSocket;

// const socketOutboundEvent = (socket, message) => {
//     socket.emit('serverMessage', { lightSensor: message });
// };

// const socketInboundEventListener =  (socket) => {
//     socket.on('clientMessage', (data) => {
//         console.log(data);
//     })
// }

// const setSocket = function(socket) {
//     console.log('socket connection established...');
//     openedSocket = socket;
//     socketInboundEventListener(socket);
// }

const mqEvent = function(message) {
    //openedSocket ? socketOutboundEvent(openedSocket, message) : 'Socket not opened yet';
    openedSocket ? openedSocket.send(JSON.stringify(message)) : console.log('Socket not opened yet!');
}

wss.on('connection', function connection(ws) {
    console.log('websocket connected')
    openedSocket = ws;
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
    // ws.send({
    //   "firstName": "John",
    //   "lastName": "Smith"});

  });

//module.exports.setSocket = setSocket;
module.exports.mqEvent = mqEvent;