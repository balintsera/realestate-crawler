const DOMCrawler = require('./src/service/dom-crawler')
const urls = require('./src/config/urls.js')


const handler = async function (event, context) {
  const crawler = new DOMCrawler(
    urls,
    (results) => {
      console.log("crawler results", results)
      if (results.length > 0) {
        //new BulkInsert('flats', 'flat', results, esClient)
      }
    })

  crawler
    .start()
}

exports.handler = handler

// local test, remove it
handler()


