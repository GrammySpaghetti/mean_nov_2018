var Task = require('../models/task');

module.exports = {

  all_tasks: function(req, res){
    var tasks = Task.find({}, function(err, task){
        res.json({err: err, data: task});
    });
  },

  new_task: function(req, res){
    var add = new Task({title: req.body.title, description: req.body.description});
    add.save(function(err, task){
      res.json({err: err, data: task});
    });
  },

  delete_task: function(req, res){
    Task.findOneAndDelete({title: req.params.task}, function(err, task){
      console.log(task);
      res.json({err: err, data: task});
    });
  },

  id_task: function(req, res){
    Task.findOne({title: req.params.task}, function(err, task){
      console.log(task);
      res.json({err: err, data: task});
    });
  },

  update_task: function(req, res){
    Task.findOneAndUpdate({title: req.params.task}, {$set: {title: req.body.title, description: req.body.description}}, function(err, task){
      console.log(req.body);
      res.json({err: err, data: task});
    });
  },

}
