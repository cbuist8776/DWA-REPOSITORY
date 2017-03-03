var express = require('express');
var body_parser = require('body-parser');
var app = express();

// Config
var port = 3000;

app.use('/api', require('../routes/api.js')(express));


var util = require('./util.js');

// Call random generator - return string with 6 characters. 

var output = util.stringGen(6);

console.log(output);