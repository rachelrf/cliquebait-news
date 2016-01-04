var backendTopicController = require('../backendTopics/backendTopicController.js');
var userController = require('../users/userController.js');
var backendStoryController = require('../backendTopics/backendStoryController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
	app.post('/api/users/signin', userController.signin);
	app.post('/api/users/signup', userController.signup);
	app.get('/api/users/signedin', userController.checkAuth);

  // app.get('/api/url', backendTopicController.allUrls);
  app.post('/api/topic', backendTopicController.newTopic);
  app.get('/api/story', backendStoryController.fetchStories);
  // app.get('/api/getImage', backendOGImageController.fetchOGImage);


  // TODO: Add image redirector using:
  // https://www.npmjs.com/package/open-graph-scraper


  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

