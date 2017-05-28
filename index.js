const DOMCrawler = require('./src/service/dom-crawler')
const urls = require('./src/config/urls.js')
const elasticsearch = require('elasticsearch')
const esClient = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error'
})
const BulkInsert = require('./src/service/elastic-bulk-insert')

esClient.indices.delete({ index: 'flats' })

const crawler = new DOMCrawler(
    urls,
    (results) => {
        if (results.length > 0) {
            new BulkInsert('flats', 'flat', results, esClient)
        }
    })

crawler
    .start()


