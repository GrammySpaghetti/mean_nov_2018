var products_controller = require('../controllers/products_controller');

module.exports = function(app) {
  app.get('/api', products_controller.products);
}
