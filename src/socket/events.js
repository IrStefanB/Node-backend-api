const socketIo = require('socket.io');
const mqMessaging = require('../mqtt/messaging');
let openedSocket;

const socketOutboundEvent = (socket, message) => {
    socket.emit('serverMessage', { hello: message });
};

const socketInboundEventListener =  (socket) => {
    socket.on('clientMessage', (data) => {
        console.log(data);
    })
}

const setSocket = function(socket) {
    console.log('socket connection established...');
    openedSocket = socket;
    socketInboundEventListener(socket);
}

const mqEvent = function(message) {
    openedSocket ? socketOutboundEvent(openedSocket, message) : 'Socket not opened yet';
}

module.exports.setSocket = setSocket;
module.exports.mqEvent = mqEvent;