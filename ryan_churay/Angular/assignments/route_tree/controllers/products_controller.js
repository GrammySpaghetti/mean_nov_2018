var Product = require('../models/product');
var Brand = require('../models/brand');
var Category = require('../models/category');


module.exports = {

  products: function(req, res){
    products = product.find({}, function(err, products) {
      if (err) {
        // res.redirect('/users')
      }
      else {
        // res.render('index', {all_users: users});
      }
    });
  }

}
