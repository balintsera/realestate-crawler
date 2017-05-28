const RealEstate = require('../model/real-estate')

const urls = [
  {
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-alsovaros+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Alsóváros'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-alsovaros+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Alsóváros'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-belvaros+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Belváros'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-belvaros+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forrent,
  area: 'Belváros'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-felsovaros+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Felsőváros'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-felsovaros+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forrent,
  area: 'Felsőváros'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-felsovaros+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Kecskés István-telep'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-kecskes-istvan-telep+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forrent,
  area: 'Kecskés István-telep'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-klebelsbergtelep+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Klebelsberg-telep'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-klebelsbergtelep+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forrent,
  area: 'Klebelsberg-telep'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-moravaros+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Móraváros'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-moravaros+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forrent,
  area: 'Móraváros'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-odessza+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Odessza lakótelep'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-odessza+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forrent,
  area: 'Odessza lakótelep'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-petofitelep+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Petőfitelep'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-petofitelep+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forrent,
  area: 'Petőfitelep'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-rokus+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Újrókus'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-rokus+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forrent,
  area: 'Újrókus'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-szoreg+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Szőreg'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-szoreg+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forrent,
  area: 'Szőreg'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-tarjan+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Tarján'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+ar-szerint+szeged-tarjan+havi-150-ezer-Ft-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forrent,
  area: 'Tarján'
},
{
  url: 'http://ingatlan.com/szukites/elado+lakas+nem-berleti-jog+ar-szerint+szeged-ujszeged+10-mFt-ig+2-szoba-felett',
  urlType: RealEstate.getTypes().forsale,
  area: 'Újszeged'
},
{
  url: 'http://ingatlan.com/szukites/kiado+lakas+szeged-ujszeged+havi-150-ezer-Ft-ig+2-szoba-felett+ar-szerint',
  urlType: RealEstate.getTypes().forrent,
  area: 'Újszeged'
}
]

module.exports = urls
