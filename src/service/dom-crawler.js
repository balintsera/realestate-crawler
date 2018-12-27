const Crawler = require('crawler')
const RealEstateExtractor = require('./real-estate-extractor')

class DOMCrawler {
  constructor (urls, callb) {
    if (typeof urls === 'undefined') {
      throw new Error('No urls added')
    }
    this.results = []
    this.callb = callb
    this.urls = urls
    const _self = this
    this.crawler = new Crawler({
      maxConnections: 10,
      // This will be called for each crawled page
      callback (error, res, done) {
        if (error) {
          console.log('error fetching data', error)
          _self.callb([])
        } else {
          const $ = res.$
          
          // this is where actual crawling happens
          const flatsExtracted = _self._extractFlats($, res.options.parentSelector, res.options.selectors)
          this.results = flatsExtracted
          _self.callb(this.results)
        }
        done()
      }
    })
  }

  start () {
    this.crawler.queue(this.urls)
  }

  _extractFlats ($, parentSelector, selectors) {
    const $flats = $(parentSelector)
    const flatsExtracted = []
    $flats.each(function ($flat) {
      const extractor = new RealEstateExtractor($(this), selectors)
      flatsExtracted.push(extractor.extract())
    })

    return flatsExtracted
  }
}

module.exports = DOMCrawler
