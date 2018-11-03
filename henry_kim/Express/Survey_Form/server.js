// require is similar to import in Python
// express is a framework that we will import.

var express    = require('express'),
    // app is going to be how we use express to add routes, find templates, etc.
    app        = express(),
    // path lets us easily combine variables and string to form a file path
    path       = require('path'),
    port       = 8000;
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(bodyParser.urlencoded({extended: true}));

// Tell express where our static files are
app.use(express.static(path.join(__dirname, 'static')));

// Tell express where our views are
app.set(path.join('views', __dirname, 'views'));

// Now lets set the view engine itself so that express knows that we are using
// ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
app.get("/", function (request, response){
  response.render('index');
});

app.post('/submit', function (request, response){
  console.log("POST DATA \n\n", request.body)
  request.session.data = request.body;
    // redirect the user back to the root route.
    response.redirect('/results');
});

app.get("/results", function (request, response){
  response.render('results', {data:request.session.data});
});


app.listen(port, function() {
    console.log(`listening on port ${port}`);
})