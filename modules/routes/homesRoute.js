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

module.exports = router;