var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  img: {
    type: String,
    required: [true, 'Please submit a url for the cake image'],
  }
}, {timestamps: true });

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
