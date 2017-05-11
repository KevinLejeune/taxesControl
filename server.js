var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
});
server.listen(3000);

console.log("Votre application fonctionne à l'adresse suivante : http://localhost:3000")