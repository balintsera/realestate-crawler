const uniqueString = require('unique-string')

class RealEstate {
  constructor (address, price, shortDesc, size, roomCount, foreignID) {
    this.id = uniqueString()
    this.address = address
    this.price = price
    this.shortDesc = shortDesc
    this.size = size
    this.roomCount = roomCount
    this.foreignID = foreignID
  }

  parseNumbers () {
    this.price = parseFloat(this.price, 10)
    this.size = parseInt(this.size, 10)
    this.priceNum = this.price
    this.sizeNum = this.size
    this.roomCountNum = parseInt(this.roomCount, 10)
  }
}

module.exports = RealEstate
