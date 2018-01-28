 var fs = require('fs');var http = require('http');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var url = require('url'); 
http.createServer(function(req, res) {
  var urlParsed = url.parse(req.url);

  switch (urlParsed.pathname) {

case '/':
     res.setHeader('Content-Type', 'text/html'); sendFile("inkomp.html", res);
 break;
default:
      res.statusCode = 404;
      res.end("Not found");
  }


}).listen(port, ip);
function sendFile(fileName, res) {
  var fileStream = fs.createReadStream(fileName);
  fileStream
    .on('error', function() {
      res.statusCode = 500;
      res.end("Server error");
    })
    .pipe(res)
    .on('close', function() {
      fileStream.destroy();
    });
};
