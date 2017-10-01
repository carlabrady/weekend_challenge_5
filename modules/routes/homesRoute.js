var router = require('express').Router();
var Homes = require('../models/realestateSchema');

router.get('/sale', function(req, res){
    Homes.find({cost :{$exists: true}}, function(err, results) {
        if (err) {
            console.log('get err in homesRoute');
            res.sendStatus(500);
        } else {
            console.log('routerGet results:', results);
            res.send(results);
        }

    })
});

router.get('/rent', function(req, res){
    Homes.find({cost :{$exists: false}}, function(err, results) {
        if (err) {
            console.log('get err in homesRoute');
            res.sendStatus(500);
        } else {
            console.log('routerGet results:', results);
            res.send(results);
        }

    })
});

router.post( '/', function( req, res ){
    console.log( 'in listing post with:', req.body );
    var home = new Homes (req.body);
    home.save( function (err){
        if(err) {
            console.log('DB err', err);
            res.sendStatus(500)
        } else {
            res.sendStatus(200);
        }
    })//END home save
}); //end home post

module.exports = router;