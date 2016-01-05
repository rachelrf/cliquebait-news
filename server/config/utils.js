var Story = require('../backendTopics/storyModel.js');

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
    stories.forEach(function(item) {
      var query = {'url': item.Url};

      item.updatedAt = Date.now;
      var data = {
          $set: item,
          $inc: {
            count: 1
          }
      }

      Story.findOneAndUpdate(query, data, {upsert: false}, function(err, story) {
        if (err) {
          console.log(err);
        } else {
          console.log('time a count updated!');
        }
      });
    });
  }
}

module.exports = utils;

