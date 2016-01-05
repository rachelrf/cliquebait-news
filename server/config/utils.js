var Story = require('../backendTopics/storyModel.js');
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

  incrementCountTopic: function(name) {


  },

  incrementStoriesCountandDate: function(stories) {
    
    var currentTime = Date.now().getTime;
    console.log('CURRENT TIME',currentTime)
    stories.forEach(function(item) {
      var query = {'url': item.url};

      var data = {
          // $set: {
          //   updatedAt: currentTime
          // },
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
  }
}

module.exports = utils;

