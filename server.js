var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlroutes = require("/Users/hannahkhan/Friend-Finder/app/routing/htmlRoutes.js");

var apiroutes = require("/Users/hannahkhan/Friend-Finder/app/routing/apiRoutes.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3002;
//var PORT = process.env.PORT || 3000
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use("/",htmlroutes);

//app.use("/api/friends",apiroutes);


require("/Users/hannahkhan/Friend-Finder/app/routing/htmlRoutes.js")(app);
require("/Users/hannahkhan/Friend-Finder/app/routing/apiRoutes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
