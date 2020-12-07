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

const reply = new Schema({
  title: {type: String},
  body: {type: String}
},{collection:'UserReplies'});

module.exports = {
  dog: mongoose.model('dogTypes',dogs),
  UserReply: mongoose.model('UserReplies',reply)
}