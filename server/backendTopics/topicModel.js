var mongoose = require('mongoose');
var crypto = require('crypto');

var TopicSchema = new mongoose.Schema({
 title: String,
 url: String,
});

module.exports = mongoose.model('Topic', TopicSchema);
