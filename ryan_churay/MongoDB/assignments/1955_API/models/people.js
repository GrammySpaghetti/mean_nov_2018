var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
}, {timestamps: true });

var People = mongoose.model('People', PeopleSchema);
module.exports = People;
