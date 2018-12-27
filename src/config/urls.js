const RealEstate = require('../model/real-estate')

const urls = [
  {
    uri: 'https://ingatlan.com/lista/kiado+haz+szeged+2-szoba-felett',
    parentSelector: '.listing__card',
    selectors: [
      {
        field: 'address',
        selector: '.listing__address',
        methods: {'text': [], 'trim': []} // property name: method name, value array: paramters for that method
      },
      {
        field: 'price',
        selector: '.price',
        methods: {'text': [], 'trim': []}
      },
      {
        field: 'size',
        selector: '.listing__data--area-size',
        methods: {'text': [], 'trim': []}
      },
      {
        field: 'roomCount',
        selector: '.listing__data--room-count',
        methods: {'text': [], 'trim': []}
      },
      {
        field: 'foreignID',
        selector: 'a.listing__thumbnail',
        methods: {'attr': ['href']}
      }
    ]
  },
  {
    uri: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-alsovaros+havi-150-ezer-Ft-ig+2-szoba-felett',
    parentSelector: '.listing__card',
    selectors: [
      {
        field: 'address',
        selector: '.listing__address',
        methods: {'text': [], 'trim': []} // property name: method name, value array: paramters for that method
      },
      {
        field: 'price',
        selector: '.price',
        methods: {'text': [], 'trim': []}
      },
      {
        field: 'size',
        selector: '.listing__data--area-size',
        methods: {'text': [], 'trim': []}
      },
      {
        field: 'roomCount',
        selector: '.listing__data--room-count',
        methods: {'text': [], 'trim': []}
      },
      {
        field: 'foreignID',
        selector: 'a.listing__thumbnail',
        methods: {'attr': ['href']}
      }
    ]
  },

]

module.exports = urls
