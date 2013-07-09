var express = require('express');

var app = express.createServer(express.logger());
var fs =require('fs');
buf = new Buffer(128);


app.get('/', function(request, response) {
  Buffer.toString(fs.readFileSync('index.html'));
--'Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
--  fs.readFileSync('index.html');

});
