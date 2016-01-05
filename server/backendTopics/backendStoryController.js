var google = require('google');
var Bing = require('node-bing-api')({ accKey: "yc1qnJqokiEdeGaDnw98TrJ99KwLDz/3SF1Xsk4gGPA" });
var async = require('async');
var Topic = require('./topicModel.js');
var Story = require('./storyModel.js');
var cache = require('./cacheFunctions.js');


module.exports = {

  fetchStories: function (req, res, next) {
    // if (cached(req.body.topic) === true) {
    //   return stuff;
    // } else {

    
    // Build topic query
    //---------------------
    var topic = req.query.topic;
    topic = topic.toLowerCase();

    cache.findStoriesForTopic(topic, function(err, stories) {
      if (err) {
        return res.send(500, { error: err });
      }
      if (stories) {
        console.log('RETURNED STORIES FROM CACHE')
        console.log(stories);
        return res.json(stories);
      }

      var query = {'name':topic};
      var data = {
          $set: {
            name: topic,
            slug: topic
          },
          $inc: {
            count: 1
          }
      }
      //---------------------


      Topic.findOneAndUpdate(query, data, {upsert:true, 'new': true}, function(err, topicObj){
        if (err) {
          console.log(err);
          return res.send(500, { error: err });
        }

        Bing.news(topic, {
          top: 5,
          newsSortBy: "Date"
        }, function(err, response, bingResults) {

            if (err) {
              console.log(err);
              res.send(500, {err: err});
            }

            var bingResultsArr = bingResults['d']['results'];

            bingResultsArr.forEach(function(item) {

              // Build story query
              //---------------------
              // var resultsObj = item['__metadata'];
              var query = {'url': item.Url};

              var data = {
                  $set: {
                    url: item.Url,
                    title: item.Title,
                    description:item.Description,
                    source: item.Source,
                    topic: topicObj._id
                  },
                  $inc: {
                    count: 1
                  }
              }
              //---------------------

              Story.findOneAndUpdate(query, data, {upsert:true, 'new': true}, function(err, story){
                if (err) {
                  console.log(err);
                  return res.send(500, { error: err });
                }
              });

            });

            res.json(bingResultsArr);

        });

      });
    });


  }

};

