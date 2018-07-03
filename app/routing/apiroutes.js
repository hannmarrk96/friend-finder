// var express = require("express");
// var router = express.Router();
// var fs=require('fs');
// var friends=fs.readFileSync('/Users/hannahkhan/Friend-Finder/app/data/friends.js', 'utf8');

// router.get("/api/friends", function(req, res) {
//     res.send(friends);
//     console.log("connected");
   
// });
  
// router.post("/api/friends", function(req, res) {
//     console.log("added");
//     var newfriend = req.body;
//     friends.push(newfriend);  
//     res.json(friends);
// });



// module.exports = router;
var friends = require('/Users/hannahkhan/Friend-Finder/app/data/friends');

//console.log(friends);
module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.send(friends);
    console.log("connected");
   
});
  
app.post("/api/friends", function(req, res) {
       console.log("added");
    //    console.log('req.body: ', req.body);
      var newfriend = req.body;
    //    console.log('newfriend: ', newfriend);
       friends.push(newfriend);  
       res.json(friends);
    //    console.log('friends: ', friends);
    //    var matchFriend = findMatch(newfriend, friends);
    //    res.send(matchFriend);
       //res.body = matchFriend;   //?
          // create function to find the best match, userData is the user input
  //can process data here
       
  });

  app.get("/api/:friends", function(req, res) {
    // res.send(friends);
    // console.log("connected");
    var chosen = req.params.friends;

    if (chosen) {
      console.log(chosen);
  
      for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].name) {
          return res.json(friends[i]);
        }
      }
      return res.json(false);
    }
    return res.json(friends);
});

}


function findMatch(userData,friends) {
    //var friends = require('/Users/hannahkhan/Friend-Finder/app/data/friends');
    var totaldiff = 0;
    var diff = [];
    for (var i=0; i<friends.length; i++) {
       for (var n=0; n<10;n++) {
           totaldiff += Math.abs(parseInt(friends[i].scores[n])-parseInt(userData.score[n]));
       }
       diff.push(totaldiff);   
    }
    console.log(diff);
    var minDiff = Math.min(diff);
    var minIndex = diff.indexOf(minDiff);
    return friends[minIndex];
   }
   