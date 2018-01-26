var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var msp=[],mp=[],stp=0; 
var http = require('http'),stp=1;
var fs = require('fs');
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

function sp(p){if(stp==1){if(p<11){var buf='',http = require('http'),options = {
hostname:'proxy-list.org',port:80,path:'/russian/index.php?p='+p,
method:'GET',headers: {	
'User-Agent':'Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0',
'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',}};
var req=http.request(options,function(res){res.on('data',function(chunk){
buf+=chunk;});res.on('end',function(){
var i1=0,i2,i3,np,fp,xost,purt,tam=10;
while(i1!=-1){i1=buf.indexOf("Proxy('",i1);if(i1!=-1){i2=buf.indexOf("')",i1);
i1+=7;np=buf.substring(i1,i2);fp=Base64.decode(np);if(mp.indexOf(fp)==-1){ mp.push(fp);i3=fp.indexOf(":");
xost=fp.substring(0,i3);i3++;
purt=fp.substring(i3);setTimeout(prov,tam,xost,purt,fp);tam+=300;};};};
p++;setTimeout(sp,6300,p);})});req.end();}else{p=1; sp(p);};}else{fs.writeFileSync('msp.js',JSON.stringify(msp));setTimeout(function(){let p=JSON.parse(fs.readFileSync('msp.js', 'utf8'));console.log(p);},1900);};};

 function prov(xost,purt,fp){var buf='',s=0;
 var pis='users=1&message=t&is_private=1&room=1'; 
  var ontent=pis.length,Http = require('http'),Tls = require('tls');
var req = Http.request({host:xost,port:purt,method:'CONNECT',
path:'livechat.su:443',
});
req.on('connect', function (res, socket, head) {
     var cts = Tls.connect({
        host: 'livechat.su',
        socket: socket
    }, function () {
        cts.write('POST /req/send_message.php HTTP/1.1\r\nHost: livechat.su\r\n'+
'Content-Length: '+ontent+'\r\n'+
'User-Agent: Mozilla/5.0 (Windows NT 10.0; rv:43.0) Gecko/20100101 Firefox/43.0\r\n'+
'Content-Type: application/x-www-form-urlencoded; charset=UTF-8'+
'\r\n\r\n'+pis+
'\r\n\r\n'
);});cts.on('data', function(chunk)  { });
cts.on('end', function(end)  {msp.push(fp);s=1;
  });cts.on('error', function(error)  {});});
req.on('error', function(error)  {});req.end(); var st=function( ){if(s==0){req.abort(); };};setTimeout(st,3700);}; 