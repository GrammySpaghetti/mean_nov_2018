var users_controller = require('../controllers/users_controller');

module.exports = function(app) {
  app.get('/', users_controller.index);
  app.post('/new_quote', users_controller.new_quote);
  app.get('/quotes', users_controller.quotes);
}
