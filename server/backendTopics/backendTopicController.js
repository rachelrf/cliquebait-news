var utils = require('../config/utils.js');

module.exports = {

  fetchTrending: function (req, res, next) {
  	utils.returnHotTopics(function(err, trendingTopicResults) {
  		if (err) {
  			console.log(err);
  		}
  		res.json(trendingTopicResults);
  	})

  },

  fetchTop: function (req, res, next) {
    utils.returnTopTopics(function(err, topTopicResults) {
      if (err) {
        console.log(err);
      }
      res.json(topTopicResults);
    })

  },

  fetchTopStories: function (req, res, next) {
    utils.returnTopStories(function(err, topStoriesResults) {
      if (err) {
        console.log(err);
      }
      res.json(topStoriesResults);
    })

  }

};
