const DOMCrawler = require('./src/service/dom-crawler')
const RealEstate = require('./src/model/real-estate')

const elasticsearch = require('elasticsearch')
const esClient = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  log: 'error'
})
const BulkInsert = require('./src/service/elastic-bulk-insert')

esClient.indices.delete({ index: 'flats' })

const urls = [
  {
    url: 'http://ingatlan.com/lista/elado+lakas+szeged+8-10-mFt+2-szoba-felett',
    urlType: RealEstate.getTypes().forrent
  },
  {
    url: 'http://ingatlan.com/lista/elado+lakas+szeged+8-10-mFt+2-szoba-felett?page=2',
    urlType: RealEstate.getTypes().forrent
  },
  {
    url: 'http://ingatlan.com/lista/elado+lakas+szeged+8-10-mFt+2-szoba-felett?page=3',
    urlType: RealEstate.getTypes().forrent
  },
  {
    url: 'http://ingatlan.com/lista/elado+lakas+szeged+8-10-mFt+2-szoba-felett?page=4',
    urlType: RealEstate.getTypes().forrent
  },
  {
    url: 'http://ingatlan.com/lista/elado+lakas+szeged+8-10-mFt+2-szoba-felett?page=5',
    urlType: RealEstate.getTypes().forrent
  },
  {
    url: 'http://ingatlan.com/lista/elado+lakas+szeged+8-10-mFt+2-szoba-felett?page=6',
    urlType: RealEstate.getTypes().forrent
  },
  {
    url: 'http://ingatlan.com/szukites/kiado+lakas+szeged+havi-100-ezer-Ft-ig+2-szoba-felett',
    urlType: RealEstate.getTypes().forsale
  },
  {
    url: 'http://ingatlan.com/szukites/kiado+lakas+szeged+havi-100-ezer-Ft-ig+2-szoba-felett?page=2',
    urlType: RealEstate.getTypes().forsale
  },
  {
    url: 'http://ingatlan.com/szukites/kiado+lakas+szeged+havi-100-ezer-Ft-ig+2-szoba-felett?page=3',
    urlType: RealEstate.getTypes().forsale
  },
  {
    url: 'http://ingatlan.com/szukites/kiado+lakas+szeged+havi-100-ezer-Ft-ig+2-szoba-felett?page=4',
    urlType: RealEstate.getTypes().forsale
  },
  {
    url: 'http://ingatlan.com/szukites/kiado+lakas+szeged+havi-100-ezer-Ft-ig+2-szoba-felett?page=5',
    urlType: RealEstate.getTypes().forsale
  },
  {
    url: 'http://ingatlan.com/szukites/kiado+lakas+szeged+havi-100-ezer-Ft-ig+2-szoba-felett?page=6',
    urlType: RealEstate.getTypes().forsale
  }
]

const crawler = new DOMCrawler(
    urls,
    (results) => {
        //console.log(results)
        new BulkInsert('flats', 'flat', results, esClient)
    })

crawler
    .start()


