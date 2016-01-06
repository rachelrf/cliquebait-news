var backendTopicController = require('../backendTopics/backendTopicController.js');
var backendStoryController = require('../backendTopics/backendStoryController.js');
var backendOGImageController = require('../backendTopics/backendOGImageController.js');


module.exports = function (app, express) {
  
  // app.post('/api/topic', backendTopicController.newTopic);
  app.get('/api/story', backendStoryController.fetchStories);
  app.get('/api/getImage', backendOGImageController.fetchOGImages);
  app.get('/api/trending', backendTopicController.fetchTrending);
  app.get('/api/top', backendTopicController.fetchTop);
 
};

