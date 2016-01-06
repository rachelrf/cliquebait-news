var google = require('google');
var Bing = require('node-bing-api')({ accKey: "yc1qnJqokiEdeGaDnw98TrJ99KwLDz/3SF1Xsk4gGPA" });
var async = require('async');
var Topic = require('./topicModel.js');
var Story = require('./storyModel.js');
var cache = require('./cacheFunctions.js');
var utils = require('../config/utils.js');


module.exports = {
  updateStoryCount: function(req, res, next) {
    var storyUrl = req.query.story;

    var query = {'url': storyUrl};
    var data = {
      $inc: {
        count: 1
      }
    };

    Story.findOneAndUpdate(query, data, {upsert:true, 'new': true}, function(err, story){
      if (err) {
        console.log(err);
        return res.send(500, { error: err });
      }
    });

  },

  fetchStories: function (req, res, next) {

    // Build topic query
    //---------------------
    var topic = req.query.topic;
    topic = utils.cleanTopic(topic);

    // CACHE checking

    cache.findStoriesForTopic(topic, function(err, stories) {
      if (err) {
        return res.send(500, { error: err });
      }
      if (stories) {
        console.log('CACHE TRUE')
        utils.incrementTopicCountandDate(topic)
        utils.incrementStoriesCountandDate(stories);
        return res.json(stories);
      }

      // end of cache, original topic search below

      Bing.images(topic, {
          top: 10
        }, function(err, response, bingImageResults) {
          // take all but last 3 curly braces
          var defaultImageArray = utils.cleanBingImages(bingImageResults);

          var query = {'name':topic};
          var data = {
              $set: {
                name: topic,
                images: defaultImageArray,
                defaultImage: defaultImageArray[0],
                updatedAt: new Date(Date.now())
              },
              $inc: {
                count: 1
              }
          }
          //--------------------

          Topic.findOneAndUpdate(query, data, {upsert:true, 'new': true}, function(err, topicObj){
            if (err) {
              console.log(err);
              return res.send(500, { error: err });
            }

            Bing.news(topic, {
              top: 12,
              newsSortBy: "Date"
            }, function(err, response, bingResults) {

                if (err) {
                  console.log(err);
                  res.send(500, {err: err});
                }
                var bingResultsArr = utils.cleanBingData(bingResults);

                bingResultsArr.forEach(function(item) {

                  // Build story query
                  //---------------------
                  // var resultsObj = item['__metadata'];
                  var query = {'url': item.Url};
                  item.topic = topicObj._id;
                  var data = {
                      $set: item,
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

    });


  }

};

