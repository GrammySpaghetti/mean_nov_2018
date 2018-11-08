var People = require('../models/people');

module.exports = {

  people: function(req, res){
    var people = People.find({}, function(err, people){
      if(err){
        console.log('These errors: ', err);
      }
      else{
        res.json({err: err, data: people});
      }
    })
  },

  new: function(req, res){
    var add = new People({name: req.params.name});
    add.save(function(err, person){
      res.json({err: err, data: person});
    });
  },

  remove: function(req, res){
    People.findOneAndDelete({name: req.params.name}, function(err, person){
      res.json({err: err, data: person});
    });
  },

  people_id: function(req, res){
    People.findOne({name: req.params.name}, function(err, person){
      res.json({err: err, data: person});
    });
  }

}
