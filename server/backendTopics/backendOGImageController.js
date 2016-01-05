var ogs = require('open-graph-scraper');
var async = require('async');

module.exports = {

  fetchOGImages: function (req, res, next) {
    
    var site = req.query.site; //not sure about this
    var options = {'url': site, 'timeout':2000};

    ogs(options, function(err, results) {
        if (err) {
            console.log(err);
        }

        var newUrl = 'http://wac.450f.edgecastcdn.net/80450F/hudsonvalleycountry.com/files/2015/01/cat4.jpg';
        var regex = /\.(jpg|gif|png)$/;
        

        if (results.data && results.data.ogImage && results.data.ogImage.url && regex.test(results.data.ogImage.url) ) {
            newUrl = results.data.ogImage.url;
        }
    
        res.redirect(newUrl);
    });
  
  }

};



