class ElasticBulkInsert {

  constructor (index, type, data, esClient) {
    this.index = index
    this.type = type
    if (data.length < 1) {
      throw new Error('Bulk inser needs some data.')
    }

    this.data = data
    this.esClient = esClient
    this.bulkBody = []

    this.go()
  }

  go () {
    this.createBody()
    this.esClient
      .bulk({ body: this.bulkBody })
      .then(response => {
        console.log('here')
        let errorCount = 0
        response.items.forEach(item => {
          if (item.index && item.index.error) {
            console.log(++errorCount, item.index.error)
          }
        })
        console.log(
          `Successfully indexed ${this.data.length - errorCount}
       out of ${this.data.length} items`
        )
      })
      .catch(console.err)
  }

  createBody () {
    this.data.forEach(item => {
      if (!item.hasOwnProperty('id')) {
        throw new Error('No id found in this object.' + item)
      }
      this.bulkBody.push({
        index: {
          _index: this.index,
          _type: this.type,
          _id: item.id
        },
        mappings: {
          price: {
            type: 'number'
          }
        }
      })
      this.bulkBody.push(item)
    })
  }
}

module.exports = ElasticBulkInsert
