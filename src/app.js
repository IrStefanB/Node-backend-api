const http = require('http'); 
const hostname = '192.168.0.112'; 
const port = 3000; 
const server = http.createServer();
server.on('request', (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Worlds\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
