const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from the Node.js Two-Tier App running on AKS!\n');
});

server.listen(80, () => {
  console.log('Server running on port 80');
});
