const RealEstate = require('../model/real-estate')

class RealEstateExtractor {
  constructor (parent) {
    this.parent = parent
    this.realEstate = new RealEstate()
    // The selector name must match the appropriate property of RealEstate class, eg. realEstate.address =~ this.selectors.address etc. See extractAll
    this.selectors = {
      address: '.listing__address',
      price: '.price',
      size: '.listing__data--area-size',
      roomCount: '.listing__data--room-count',
    }
    this.extract()
  }

  extract () {
    this.extractAll()

    return this.realEstate
  }

  extractAll () {
    Object.keys(this.selectors).forEach(selectorPropName => {
      this.realEstate[selectorPropName] =
        this.parent
          .find(this.selectors[selectorPropName])
          .text()
          .trim()
    })
  }
}

module.exports = RealEstateExtractor
