var mongoose = require('mongoose');
var crypto = require('crypto');

var TopicSchema = new mongoose.Schema({
 id: String, // url
 count: Number
});

module.exports = mongoose.model('Story', StorySchema);