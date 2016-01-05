var mongoose = require('mongoose');
var crypto = require('crypto');

var TopicSchema = new mongoose.Schema({
 id: String, // search parameter
 count: Number,
 stories: Array // array of story objects
});

module.exports = mongoose.model('Topic', TopicSchema);
