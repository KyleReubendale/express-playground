// var express = require('express')
// var server = express()
// var pi = Math.PI;
// console.log(pi)
// server.get('/math/pi', function (request, response) {
//   response.send(pi)
// })
// server.listen(8000)


var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var pi = require('./pi');

app.use(pi);

app.listen(port, function(){

})
