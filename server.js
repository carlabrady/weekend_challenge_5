var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var homesRoute = require('./modules/routes/homesRoute.js');
var mongoose = require('mongoose');

// middleware
mongoose.connect('mongodb://localhost:27017/realestate');

app.use(bodyParser.json());
app.use(express.static('public'));

// app.use('/homes', homesRoute);

app.listen(5555, 'localhost', function (req, res) {
  console.log('listening on 5555');
});