var http = require('http');

http.createServer(function (req, res){
  res.write("Madratos");
  res.end();
}).listen(8080);