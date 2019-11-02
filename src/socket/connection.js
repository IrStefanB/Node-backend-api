//////////////// Socket.io implementation

// const socketIo = require('socket.io');
// const socketEvents = require('./events');

// const connectToSock = (server) => {
//     // start socket listening
//     const socketConnection = socketIo(server);

//     // pass the connected socket to an event handler
//     socketConnection.on('connection', (socket) => {
//         socketEvents.setSocket ( socket );
//     })
// }

// module.exports = connectToSock

//////////////// Socket.io implementation


const WebSocket = require('ws');

const ws = new WebSocket.Server({
  port: 3000,
  perMessageDeflate: {
    zlibDeflateOptions: { // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3,
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    clientMaxWindowBits: 10,       // Defaults to negotiated value.
    serverMaxWindowBits: 10,       // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10,          // Limits zlib concurrency for perf.
    threshold: 1024,               // Size (in bytes) below which messages
                                   // should not be compressed.
  }
});

module.exports = ws