const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Bonjour !");
});

server.listen(8080);
