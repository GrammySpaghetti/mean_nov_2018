var Comment = require('../models/comment');
var Message = require('../models/message');

module.exports = {

  index: function(req, res){
    Message.find({}).populate('comments').exec(function(err, messages){
      // console.log(dogs);
      if (err) {
        // res.redirect('/')
      }
      else {
        res.render('index', {mb: messages});
      }
    });
  },

  message: function(req, res){
    console.log(req.body);
    var new_message = new Message({name: req.body.name, content: req.body.content});
    new_message.save(function(err, message) {
      if (err) {
        console.log('There is an error: ', err);
        for(var key in err.errors){
          req.flash('message', err.errors[key].message);
        }
        res.redirect('/');
      }
      else {
        res.redirect('/');
      }
    });
  },

  comment: function(req, res){



    console.log(req.body);
    var new_comment = new Comment.model({ name: req.body.name, content: req.body.content, message: req.body.message_id});
    new_comment.save(function(err, comment) {
      if (err) {
        console.log('There is an error: ', err);
        for(var key in err.errors){
          req.flash('message', err.errors[key].message);
        }
        res.redirect('/');
      }
      else {
        var message = Message.findByIdAndUpdate({_id: req.body.message_id}, {$push: {comments: new_comment._id}}, function(err, messages) {
          if (err) {
            for(var key in err.errors){
              req.flash('message', err.errors[key].message);
            }
            res.redirect('/');
          }
          else {
            res.redirect('/');
          }
        });


      }
    });
  },

}
