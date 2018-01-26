﻿var fs = require('fs');
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
