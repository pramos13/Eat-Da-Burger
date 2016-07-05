var express = require("express");
var exphbs = require('express-handlebars');
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();

//Serve static content for the app 
app.use("/static", express.static("public"));

// parse app
app.use(bodyParser.urlencoded({
  extended: false
}))
// override with POST 
app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/update', routes);
app.use('/delete', routes);

var PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log("Listening on %s", PORT);
});