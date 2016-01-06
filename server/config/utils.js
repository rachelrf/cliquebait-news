var Story = require('../backendTopics/storyModel.js');
var Topic = require('../backendTopics/topicModel.js');
var moment = require('moment');

var utils = {

  cleanBingData: function(bingResults) {
    var resultsArray = bingResults['d']['results'];
    return resultsArray.map(function(item) {
      return {
        url: item.Url,
        title: item.Title,
        description:item.Description,
        source: item.Source
      }
    });
  },

  cleanBingImages: function(bingResults) {
    var resultsArray = bingResults['d']['results'];
    return resultsArray.map(function(item) {
      return item.MediaUrl
    });
  },

  cleanTopic: function(str) {
    return str.toLowerCase().replace(/\s\s+/g, ' ');
  },

  incrementTopicCountandDate: function(topic) {
    var currentTime = new Date(Date.now());
    var query = {'name': topic};

    var data = {
        $set: {
          updatedAt: currentTime
        },
        $inc: {
          count: 1
        }
    }

    Topic.findOneAndUpdate(query, data, {upsert: true}, function(err, topic) {
      if (err) {
        console.log(err);
      } else {
        console.log('time and count updated!');
      }
    });

  },

  incrementStoriesCountandDate: function(stories) {
    
    var currentTime = new Date(Date.now());
    
    stories.forEach(function(item) {
      var query = {'url': item.url};

      var data = {
          $set: {
            updatedAt: currentTime
          },
          $inc: {
            count: 1
          }
      }

      Story.findOneAndUpdate(query, data, {upsert: true}, function(err, story) {
        if (err) {
          console.log(err);
        } else {
          console.log('time and count updated!');
        }
      });
    });
  },

  returnHotTopics: function(callback) {
    Topic.find().limit(6).sort({ updatedAt: -1 }).exec(callback);
  },

  returnTopTopics: function(callback) {
    Topic.find().limit(3).sort({ count: -1 }).exec(callback);
  },

  returnTopStories: function(callback) {
    Story.find().limit(3).sort({ count: -1 }).exec(callback);
  },

  updateStoryCount: function(url) {

  }
}

module.exports = utils;


