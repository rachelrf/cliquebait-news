var util = require('../config/utils.js');
var ogs = require('open-graph-scraper');
var async = require('async');

module.exports = {

  fetchOGImages: function (req, res, next) {
    var site = req.query.site; //not sure about this
    console.log('HEREHEREHEREHERE')
    var options = {'url': site};

    ogs(options, function(err, results) {
        if (err) {
            console.log(err);
        }
        var newUrl = results.data.ogImage.url.split('').slice(9).join('');
        console.log("REDIRECTING! results:",newUrl);
        res.redirect(newUrl);
    });
  console.log('Fetching Images')
  }

};



