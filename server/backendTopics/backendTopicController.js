Q = require('q');
util = require('../config/utils.js');
google = require('google');

// wtf does this do???
// var findTopic = Q.denodeify(Topic.findOne.bind(Topic));
// var createTopic = Q.denodeify(Topic.create.bind(Topic));
// var findAllTopics = Q.denodeify(Topic.find.bind(Topic));

module.exports = {

  newTopic: function (req, res, next) {
    // add new topic to the user information, or just to general site information
    res.json({});
  }

};
