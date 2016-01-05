var backendTopicController = require('../backendTopics/backendTopicController.js');

var backendStoryController = require('../backendTopics/backendStoryController.js');
var backendOGImageController = require('../backendTopics/backendOGImageController.js');
// var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
	
  app.post('/api/topic', backendTopicController.newTopic);
  app.get('/api/story', backendStoryController.fetchStories);
  app.get('/api/getImage', backendOGImageController.fetchOGImages);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  // app.use(helpers.errorLogger);
  // app.use(helpers.errorHandler);
};

