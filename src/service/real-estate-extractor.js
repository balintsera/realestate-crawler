const RealEstate = require('../model/real-estate')

class RealEstateExtractor {
  constructor (parent) {
    console.log(parent)
    this.parent = parent
    this.realEstate = new RealEstate()
    this.selectors = {
      price: '.listing__address'
    }
    this.extract()
  }

  extract () {
    this.realEstate.address = this.parent.find(this.selectors.price).text()

    return this.realEstate
  }
}

module.exports = RealEstateExtractor
