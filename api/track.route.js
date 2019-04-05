const express = require('express');
const trackRoutes = express.Router();

// Require track model in our routes module
let Track = require('./track.model');

// Defined store route
trackRoutes.route('/add').post(function (req, res) {
  let track = new Track(req.body);
  track.save()
    .then(track => {
      res.status(200).json({'track': 'track in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
trackRoutes.route('/').get(function (req, res) {
    Track.find(function(err, track){
    if(err){
      console.log(err);
    }
    else {
      res.json(track);
    }
  });
});



module.exports = trackRoutes;