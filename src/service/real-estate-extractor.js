const RealEstate = require('../model/real-estate')

class RealEstateExtractor {
  constructor (parent, type, area) {
    this.parent = parent
    this.realEstate = new RealEstate()
    this.realEstate.type = type
    this.realEstate.area = area
    // The selector name must match the appropriate property of RealEstate class, eg. realEstate.address =~ this.selectors.address etc. See extractAll
    this.selectors = {
      address: {
        selector: '.listing__address',
        methods: { 'text': [], 'trim': [] } // property name: method name, value array: paramters for that method
      },
      price: {
        selector: '.price',
        methods: { 'text': [], 'trim': [] }
      },
      size: {
        selector: '.listing__data--area-size',
        methods: { 'text': [], 'trim': [] }
      },
      roomCount: {
        selector: '.listing__data--room-count',
        methods: { 'text': [], 'trim': [] }
      },
      foreignID: {
        selector: 'a.listing__thumbnail',
        methods: { 'attr': ['href'] }
      }
    }
    this.extract()
  }

  extract () {
    this.extractAll()
    this.realEstate.parseNumbers()
    return this.realEstate
  }

  // convert this.selectors to a jQuery command like this.parent.find(this.selectors[selectorPropName].selector).attr("href") and run it for get information from DOM
  extractAll () {
    Object.keys(this.selectors).forEach(selectorPropName => {
      if (!this.realEstate.hasOwnProperty(selectorPropName)) {
        throw new Error('No such property in RealEstate: ' + selectorPropName)
      }
      let extractorCommand = `this.parent.find(this.selectors[selectorPropName].selector)`
      const methods = Object.keys(this.selectors[selectorPropName].methods).reduce((reduced, current) => {
        const args =
          this.selectors[selectorPropName].methods[current].reduce((reducedArgs, currentArg) => {
            if (reducedArgs.length > 1) {
              reducedArgs += ','
            }
            return reducedArgs + '"' + currentArg + '"'
          }, '')
        return reduced + `.${current}(${args})`
      }, '')
      extractorCommand += methods

      this.realEstate[selectorPropName] = eval(extractorCommand)
    })
  }
}

module.exports = RealEstateExtractor
