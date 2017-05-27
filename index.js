const DOMCrawler = require('./src/service/dom-crawler')

const elasticsearch = require('elasticsearch')
const esClient = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error'
})
const BulkInsert = require('./src/service/elastic-bulk-insert')

esClient.indices.flush({ index: 'flats' })

const crawler = new DOMCrawler(
    ['http://ingatlan.com/lista/elado+lakas+szeged+8-10-mFt+2-szoba-felett'],
    (results) => {
        console.log('resulst in callback', results)
        const insertion = new BulkInsert('flats', 'flat', results, esClient)
    })

crawler
    .start()


