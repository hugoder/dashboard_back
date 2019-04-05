const express = require('express');
const artistRoutes = express.Router();

// Require artist model in our routes module
let Artist = require('./artist.model');

// Defined store route
artistRoutes.route('/add').post(function (req, res) {
  let artist = new Artist(req.body);
  artist.save()
    .then(artist => {
      res.status(200).json({'artist': 'artist in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
artistRoutes.route('/').get(function (req, res) {
    Artist.find(function(err, artist){
    if(err){
      console.log(err);
    }
    else {
      res.json(artist);
    }
  });
});

// Defined edit route
artistRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  artist.findById(id, function (err, artist){
      res.json(artist);
  });
});

//  Defined update route
artistRoutes.route('/update/:id').post(function (req, res) {
    Artist.findById(req.params.id, function(err, artist) {
    if (!artist)
      res.status(404).send("data is not found");
    else {
        artist.name = req.body.name;
        artist.Birth = req.body.Birth;
        artist.followers = req.body.followers;
        artist.Album = req.body.Album;

        artist.save().then(artist => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
artistRoutes.route('/delete/:id').get(function (req, res) {
    Artist.findByIdAndRemove({_id: req.params.id}, function(err, artist){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = artistRoutes;