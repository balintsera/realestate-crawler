const Crawler = require('crawler')
const RealEstateExtractor = require('./real-estate-extractor')

class DOMCrawler {
  constructor (urls) {
    if (typeof urls === 'undefined') {
      throw new Error('No urls added')
    }

    this.urls = urls
    const _self = this
    this.crawler = new Crawler({
      maxConnections: 10,
      // This will be called for each crawled page
      callback (error, res, done) {
        if (error) {
          console.log(error)
        } else {
          const $ = res.$
          // this is where actual crawling happens
          const flatsExtracted = _self._extractFlats($)
          console.log('extracted', flatsExtracted)
        }
        done()
      }
    })
  }

  start () {
    this.crawler.queue(this.urls)
  }

  _extractFlats ($) {
    const $flats = $('.listing__link')
    const flatsExtracted = []
    $flats.each(function ($flat) {
      const extractor = new RealEstateExtractor($(this))
      flatsExtracted.push(extractor.extract())
    })

    return flatsExtracted
  }
}

module.exports = DOMCrawler
