var ogs = require('open-graph-scraper');
var async = require('async');

module.exports = {

  fetchOGImages: function (req, res, next) {
    console.log('HEREHEREHEREHERE, req.query.site');
    // res.redirect('http://wac.450f.edgecastcdn.net/80450F/hudsonvalleycountry.com/files/2015/01/cat4.jpg');
    var site = req.query.site; //not sure about this
    var options = {'url': site};

    ogs(options, function(err, results) {
        if (err) {
            console.log(err);
        }
        var newUrl = results.data.ogImage.url || 'http://wac.450f.edgecastcdn.net/80450F/hudsonvalleycountry.com/files/2015/01/cat4.jpg';
        
        res.redirect(newUrl);
    });
  
  }

};



