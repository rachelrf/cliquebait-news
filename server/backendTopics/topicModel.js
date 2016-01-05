var mongoose = require('../config/db');

var TopicSchema = new mongoose.Schema({
 name: String,
 images: [String],
 count: Number,
 createdAt: { type: Date, default: new Date(Date.now()) },
 updatedAt: { type: Date, default: new Date(Date.now()) }
});

module.exports = mongoose.model('Topic', TopicSchema);
