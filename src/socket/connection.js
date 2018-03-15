const socketIo = require('socket.io');
const socketEvents = require('./events');

const connectToSock = (server) => {
    // start socket listening
    const socketConnection = socketIo(server);

    // pass the connected socket to an event handler
    socketConnection.on('connection', (socket) => {
        socketEvents.setSocket ( socket );
    })
}

module.exports = connectToSock