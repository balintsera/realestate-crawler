const DOMCrawler = require('./src/service/dom-crawler')
const urls = require('./src/config/urls.js')
const elasticsearch = require('elasticsearch')


const esClient = new elasticsearch.Client({
 host: '127.0.0.1:9200',
 log: 'error'
})

const BulkInsert = require('./src/service/elastic-bulk-insert')

const restify = require('restify')

function refresh (req, res, next) {
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
  next()
}

const server = restify.createServer()
server.pre(restify.pre.userAgentConnection())
server.get('/refresh', refresh)
server.head('/refresh', refresh)

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url)
})





