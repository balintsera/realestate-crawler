class RealEstate {
  constructor (address, price, shortDesc, size, roomCount, foreignID) {
    this.address = address
    this.price = price
    this.shortDesc = shortDesc
    this.size = size
    this.roomCount = roomCount
    this.foreignID = foreignID
  }
}

module.exports = RealEstate
