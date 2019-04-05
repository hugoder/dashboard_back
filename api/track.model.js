const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Track = new Schema({
  title: {
    type: String
  },
  duration: {
    type: Number
  },
  listenings: {
    type: Number
  },
  likes: {
    type: Number
  }
},{
    collection: 'track'
});

module.exports = mongoose.model('Track', Track);
