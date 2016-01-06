
var mongoose = require('mongoose');

if (process.env.NODE_ENV === 'production') {
	mongoose.connect('mongodb://pique:ADbmvKsGARyFl1IN5DvjZlVpyVUpQjrxfuBBvV82Iuc-@ds058048.mongolab.com:58048/pique');
else {
	mongoose.connect('mongodb://localhost/pique');
}

module.exports = mongoose;
