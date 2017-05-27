var Crawler = require('crawler')

class DOMCrawler {
  constructor (urls) {
    if (typeof urls === 'undefined') {
      throw new Error('No urls added')
    }

    this.urls = urls
    
    this.crawler = new Crawler({
      maxConnections: 10,
      // This will be called for each crawled page
      callback: function (error, res, done) {
        if (error) {
          console.log(error)
        } else {
          var $ = res.$
          // this is where actual crawling happens
          console.log($('.listing__link .listing__address').text())
        }
        done()
      }
    })
  }

  start () {
    this.crawler.queue(this.urls)
  }
}

module.exports = DOMCrawler
