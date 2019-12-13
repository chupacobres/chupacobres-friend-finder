var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// App setup
var app = express();
var PORT = process.env.PORT || 8080;


// Express app handles data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routes setup
require(path.join(__dirname, './app/routing/apiroutes'))(app);
require(path.join(__dirname, './app/routing/htmlroutes'))(app);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });