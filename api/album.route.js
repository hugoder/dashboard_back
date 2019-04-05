const express = require('express');
const albumRoutes = express.Router();

// Require album model in our routes module
let Album = require('./album.model');

// Defined store route
albumRoutes.route('/add').post(function (req, res) {
  let album = new Album(req.body);
  album.save()
    .then(album => {
      res.status(200).json({'album': 'album in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
albumRoutes.route('/').get(function (req, res) {
    Album.find(function(err, album){
    if(err){
      console.log(err);
    }
    else {
      res.json(album);
    }
  });
});



module.exports = albumRoutes;