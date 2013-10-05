var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

//static content - it would be better to serve it through nginx put before node.js
process.env.PWD = process.cwd()
app.use(express.static(process.env.PWD + '/assets'));

app.get('/', function (request, response) {
    var fileBuff = fs.readFileSync('index.html');
    response.send(fileBuff.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Listening on " + port);
});