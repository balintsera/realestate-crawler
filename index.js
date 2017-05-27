var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($(".listing__link .listing__address").text());
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('http://ingatlan.com/lista/elado+lakas+szeged+8-10-mFt+2-szoba-felett');
