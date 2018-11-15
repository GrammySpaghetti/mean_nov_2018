var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Brand = require('../models/brand');
var Cateogry = require('../models/category');

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product Name is required']
  },
  brand: [{type: Schema.Types.ObjectId, ref: 'Brand'}],
  category: [{type: Schema.Types.ObjectId, ref: 'Category'}],
}, {timestamps: true });

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
