var express = require("express");
// var router = express.Router();
var app = express();
var path = require("path");
//var app = express();
// Routes
// =============================================================
module.exports = function(app) {
// Basic route that sends the user first to the AJAX Page  instead of "/" can use "*"
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

}

//module.exports = router;