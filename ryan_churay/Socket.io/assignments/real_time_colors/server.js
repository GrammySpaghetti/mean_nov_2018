// require is similar to import in Python
// express is a framework that we will import.
var session = require('express-session');
var express    = require('express'),
    // app is going to be how we use express to add routes, find templates, etc.
    app        = express(),
    // path lets us easily combine variables and string to form a file path
    path       = require('path'),
    port       = 8000;
const server = app.listen(1337);
const io = require('socket.io')(server);
var color = '';
io.on('connection', function (socket) { //2
    socket.emit(`${color}`)
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server'}); //3
    socket.on('thankyou', function (data) { //7
        console.log(data.msg); //8 (note: this log will be on your server's terminal)
    });
    socket.on('red_click', function () { //7
        color = 'set_red'
        io.emit('set_red');
    });
    socket.on('blue_click', function () { //7
      color = 'set_blue'
      io.emit('set_blue');
    });
    socket.on('green_click', function () { //7
      color = 'set_green'
      io.emit('set_green');
    });

});
// Tell express where our static files are
app.use(express.static(path.join(__dirname, 'static')));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

// Tell express where our views are
app.set(path.join('views', __dirname, 'views'));

// Now lets set the view engine itself so that express knows that we are using
// ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.use(function(req, res, next) {
    res.locals.count = req.session.count;
    next();
});
// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
require('./config/routes.js')(app);


app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
