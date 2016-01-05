var mongoose = require('../config/db');

var StorySchema = new mongoose.Schema({
 url: String,
 title: String,
 description: String,
 source: String,
 count: Number,
 topic: { type: mongoose.Schema.ObjectId, ref: 'Topic' },
 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Story', StorySchema);
