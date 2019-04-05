const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Album = new Schema({
  title: {
    type: String
  },
  release: {
    type: Date
  },
  genre: {
    type: String
  },
  cover_url: {
    type: String
  }
},{
    collection: 'album'
});

module.exports = mongoose.model('Album', Album);
