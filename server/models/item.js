const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dogs = new Schema({
  category: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  color: {
    type:String
  }
},{collection:'dogTypes'});

module.exports = mongoose.model('dogTypes',dogs);