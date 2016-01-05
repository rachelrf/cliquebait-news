
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

  incrementCountStory: function(url) {


  }
}

module.exports = utils;
