const uniqueString = require('unique-string')

class RealEstate {
  constructor (address, price, shortDesc, size, roomCount, foreignID) {
    this._id = uniqueString()
    this.address = address
    this.price = price
    this.shortDesc = shortDesc
    this.size = size
    this.roomCount = roomCount
    this.foreignID = foreignID
  }
}

module.exports = RealEstate
