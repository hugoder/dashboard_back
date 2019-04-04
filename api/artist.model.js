const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Artist = new Schema({
  name: {
    type: String
  },
  Birth: {
    type: Date
  },
  followers: {
    type: Number
  },
  Album: {
    type: String
  }
},{
    collection: 'artist'
});

module.exports = mongoose.model('Artist', Artist);
