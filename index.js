const DOMCrawler = require('./src/service/dom-crawler')

const crawler = new DOMCrawler(['http://ingatlan.com/lista/elado+lakas+szeged+8-10-mFt+2-szoba-felett'])
crawler.start()
