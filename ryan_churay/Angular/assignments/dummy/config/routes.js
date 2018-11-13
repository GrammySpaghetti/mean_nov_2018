var gold_controller = require('../controllers/gold_controller');

module.exports = function(app) {
  app.get('/game', gold_controller.index);
  app.post('/game', gold_controller.new);
  // app.post('/:id', gold_controller.savegold);
}
