var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var homesRoute = require('./modules/routes/homesRoute.js');
var mongoose = require('mongoose');

// middleware
// mongoose.connect('mongodb://agent:realestate@ds157444.mlab.com:57444/heroku_fm84mlp0');

var databaseURI = '';
// process.env.MONGODB_URI will only be defined if you 
// are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    databaseURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    databaseURI = 'mongodb://localhost:27017/realestate';
}

mongoose.connect(databaseURI);


app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/realestate', homesRoute);

app.listen(process.env.PORT || 5555);