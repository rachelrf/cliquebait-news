var Topic = require('./topicModel.js');
var Story = require('./storyModel.js');

var findInCache = {


	findStoriesForTopic: function(topicName, cb) {

		var topicQuery = {'name':topicName};

		Topic.findOne(topicQuery, function(err, topicObj) {
			if (err) {
				console.log(err);
				return cb(err);
			}
			if (!topicObj) {
				// No topic found. Return an empty result!
				return cb(null, null);
			}
				// increment topic count

			var storyQuery = { 'topic': topicObj._id};
			Story.find(storyQuery, function(err, storiesArr) {
				if (err) {
					console.log(err);
					return cb(err);
				}
				if (!storiesArr || storiesArr.length === 0) {
					return cb(null, null);
				}
				// incremement stories count
				return cb(null, storiesArr);
			})

			// query did not yeild a topic, go on to add topic and associated stories

		});
	}
}

module.exports = findInCache;