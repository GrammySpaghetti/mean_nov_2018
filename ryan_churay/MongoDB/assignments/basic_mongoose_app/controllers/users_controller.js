var User = require('../models/user');

module.exports = {

  users: function(req, res){
    users = User.find({}, function(err, users) {
      if (err) {
        res.redirect('/users')
      }
      else {
        res.render('index', {all_users: users});
      }
    });
  },

  add: function(req, res){
    var new_user = new User({name: req.body.name, age: req.body.age});
    new_user.save(function(err, users) {
      if (err) {
        res.redirect('/users')
      }
      else {
        res.redirect('/users');
      }
    });
  },

}
