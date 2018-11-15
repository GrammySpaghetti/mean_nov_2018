var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A brand is required!"]
  },

}, {timestamps: true});
var Brand = mongoose.model('Brand', BrandSchema);
module.exports = Brand;
