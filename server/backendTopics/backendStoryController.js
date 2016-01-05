var google = require('google');
var Bing = require('node-bing-api')({ accKey: "yc1qnJqokiEdeGaDnw98TrJ99KwLDz/3SF1Xsk4gGPA" });
var async = require('async');

module.exports = {

  fetchStories: function (req, res, next) {
    // if (cached(req.body.topic) === true) {
    //   return stuff;
    // } else {

    
    var topic = req.query.topic; 
    var results = [];

    Bing.news(topic, {
      top: 5,
      newsSortBy: "Date"
    }, function(err, response, results) {
      res.json(results['d']['results']);
    });

  }

};

