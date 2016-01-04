var util = require('../config/utils.js');
var google = require('google');
var Bing = require('node-bing-api')({ accKey: "yc1qnJqokiEdeGaDnw98TrJ99KwLDz/3SF1Xsk4gGPA" });
var async = require('async');

module.exports = {

  fetchStories: function (req, res, next) {
    // if (cached(req.body.topic) === true) {
    //   return stuff;
    // } else {

    // var sites = ' site:huffingtonpost.com OR site:cnn.com OR site:foxnews.com OR site:nbc.com OR site:nytimes.com OR site:www.washingtonpost.com OR site:theguardian.com/us OR site:economist.com OR site:gawker.com';
    var topic = req.query.topic; 
    var results = [];

    Bing.news(topic, {
      top: 5,
      newsSortBy: "Date"
    }, function(err, response, results) {
      res.json(results['d']['results']);
    });

    // var searchBing = function(topic, site, callback) {
    //   Bing.news(topic, {
    //   top: 5,  
    //   }, callback);
    // };

    // var searchFuncs = sites.map(function(item) {
    //   return searchBing.bind(null, topic, item, function(err, result) {
    //     if (err) {
    //       console.log(err)
    //     } else {
    //       console.log('search successful!');
    //     }
    //   });
    // });

    // async.parallel(searchFuncs, function(err, results) {
    //   console.log(results);
    //   res.json(results);
    // });
  }

};

