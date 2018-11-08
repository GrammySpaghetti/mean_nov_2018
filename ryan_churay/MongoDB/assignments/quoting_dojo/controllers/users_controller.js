var Quote = require('../models/user');

module.exports = {

  index: function(req, res){

    res.render('index');
  },

  quotes: function(req, res){
    quotes = Quote.find({}, function(err, quotes) {
      if (err) {
        res.redirect('/quotes')
      }
      else {
        res.render('quotes', {quotes: quotes});
      }
    }).sort({updatedAt: -1});
  },

  new_quote: function(req, res){
    var new_quote = new Quote({name: req.body.name, quote: req.body.quote});
    new_quote.save(function(err, quote) {
      if (err) {
        console.log('There is an error: ', err)
        for(var key in err.errors){
          req.flash('new quote', err.errors[key].message);
        }
        res.redirect('/')
      }
      else {
        res.redirect('/quotes');
      }
    });
  },

}
