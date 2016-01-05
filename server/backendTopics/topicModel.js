var mongoose = require('../config/db');

var TopicSchema = new mongoose.Schema({
 name: String,
 slug: String,
 count: Number
});

module.exports = mongoose.model('Topic', TopicSchema);
