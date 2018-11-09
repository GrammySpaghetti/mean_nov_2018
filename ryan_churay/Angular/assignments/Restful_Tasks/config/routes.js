var task_controller = require('../controllers/task_controller');

module.exports = function(app) {
  app.get('/tasks', task_controller.all_tasks);
  app.get('/tasks/:task', task_controller.id_task);
  app.post('/tasks', task_controller.new_task);
  app.put('/tasks/:task', task_controller.update_task);
  app.delete('/tasks/:task', task_controller.delete_task);
}
