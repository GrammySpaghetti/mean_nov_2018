var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A category is required!"]
  },

}, {timestamps: true});
var Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
