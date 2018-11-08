var people_controller = require('../controllers/people_controller');

module.exports = function(app) {
  app.get('/', people_controller.people);
  app.get('/new/:name/', people_controller.new);
  app.get('/remove/:name', people_controller.remove);
  app.get('/:name', people_controller.people_id);
}
