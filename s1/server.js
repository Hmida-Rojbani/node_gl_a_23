var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200);
  response.write('<h1>Bonjour GLSI-A</h1>')
  response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');