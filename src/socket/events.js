const socketIo = require('socket.io');

const socketEvents = (socket) => {
    console.log('socket connection established...');
    socket.emit('serverMessage', { hello: 'world' });
    socket.on('clientMessage', (data) => {
        console.log(data);
    })
};

module.exports = socketEvents;