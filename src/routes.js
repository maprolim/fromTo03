import { Router } from 'express';

const routes = Router();

/**
 * GET home page
 */
const tip01 = {
  destinyCountry: 'Tailândia',
  destinyCity: 'Any',
  originCountry: 'Brasil',
  originCity: 'Any',
  sugestion: 'Compre roupas sob medida no começo da viagem, busque-as prontas no final'
}
const tip02 = {
  destinyCountry: 'Tailândia',
  destinyCity: 'Any',
  originCountry: 'Brasil',
  originCity: 'Any',
  sugestion: 'Ande de elefante!'
  }
const tip03 = {
  destinyCountry: 'França',
  destinyCity: 'Paris',
  originCountry: 'Brasil',
  originCity: 'Any',
  sugestion: 'Visite o arco do triunfo.'
}
const tip04 = {
  destinyCountry: 'França',
  destinyCity: 'Paris',
  originCountry: 'Brasil',
  originCity: 'Any',
  sugestion: 'Visite a Torre Eiffel.'
}
const tip05 = {
  destinyCountry: 'Inglaterra',
  destinyCity: 'Londres',
  originCountry: 'Brasil',
  originCity: '',
  sugestion: 'Visite o London Eye.'
}
const tip06 = {
  destinyCountry: 'Inglaterra',
  destinyCity: 'Londres',
  originCountry: 'Brasil',
  originCity: '',
  sugestion: 'Coma batata frita!'
}

let arrayOfTips = [ tip01, tip02, tip03, tip04, tip05, tip06  ]

////////////////////////////////////


routes.use((req, res, next) => {
  console.log(req.method)
  next()

})



routes.get('/tips', (req, res) => {

  function filterByDestinyCountry(obj) {
    if (obj.destinyCountry == req.param('dCountry')) { return true; } 
    else { return false; }
  }
  function filterByDestinyCity(obj) {
    if (obj.destinyCity == req.param('dCity')) { return true; } 
    else { return false; }
  }
  function filterByOriginCoutry(obj) {
    if (obj.originCountry == req.param('oCountry')) { return true; } 
    else { return false; }
  }
  function filterByOriginCity(obj) {
    if (obj.originCity == req.param('oCity')) { return true; } 
    else { return false; }
  }
  let arrayOfTipsFiltered;
  arrayOfTipsFiltered = arrayOfTips;


  if (typeof(req.param('dCountry')) == 'undefined' && typeof(req.param('dCity')) == 'undefined' && typeof(req.param('oCountry')) == 'undefined' && typeof(req.param('oCity')) == 'undefined'){
    res.json(arrayOfTips);
  }
  else {
    if ( typeof(req.param('dCountry')) != 'undefined' ){ 
      arrayOfTipsFiltered = arrayOfTipsFiltered.filter(filterByDestinyCountry);
    }
    if (typeof(req.param('dCity')) != 'undefined'){
      arrayOfTipsFiltered = arrayOfTipsFiltered.filter(filterByDestinyCity);
    }
    if (typeof(req.param('oCountry')) != 'undefined'){
      arrayOfTipsFiltered = arrayOfTipsFiltered.filter(filterByOriginCoutry);
    }
    if (typeof(req.param('oCity')) != 'undefined'){
      arrayOfTipsFiltered = arrayOfTipsFiltered.filter(filterByOriginCity);
    }
  
  
    if(arrayOfTipsFiltered == ''){
      res.send('Ops! Nenhuma sugestão foi encontrada...');
    } else {
      res.json(arrayOfTipsFiltered);
    }
  }
});

routes.get('/tips/random', (req, res) => {
  
  function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let itemToShow = randomIntBetween(0, (arrayOfTips.length -1));
  res.json(arrayOfTips[itemToShow]);
  

});

routes.get('/tips/:id', (req, res) => {
  let itemToShow = req.params.id;
  res.json(arrayOfTips[itemToShow]);
});

routes.post('/tips', (req, res) => {

  // if(typeof(req.body.dCountry) == 'undefined' || typeof(req.body.dCity) == 'undefined' || typeof(req.body.oCountry) == 'undefined' || typeof(req.body.oCity) == 'undefined' || typeof(req.body.sug) == 'undefined') {

  // }
  // else {
    let incomingForPut = {
      destinyCountry: req.body.dCountry,
      destinyCity: req.body.dCity,
      originCountry: req.body.oCountry,
      originCity: req.body.oCity,
      sugestion: req.body.sug
    }
    arrayOfTips.push(incomingForPut);
  
    res.json(arrayOfTips);
  // }

});

routes.put('/tips/:id', (req, res) => {

  let { id } = req.params;
  //let { destinyCountry, destinyCity, originCountry, originCity, sugestion } = req.body;

  if(0 <= id < arrayOfTips.length ){
    arrayOfTips[id] = {
      ...arrayOfTips[id],
      ...req.body
    }


    // if(destinyCountry) {arrayOfTips[id].destinyCountry = destinyCountry};
    // if(destinyCity) {arrayOfTips[id].destinyCity = destinyCity};
    // if(originCountry) {arrayOfTips[id].originCountry = originCountry};
    // if(originCity) {arrayOfTips[id].originCity = originCity};
    // if(sugestion) {arrayOfTips[id].sugestion = sugestion};
  }


  res.json(arrayOfTips);

  // let id = req.params.id;
  // res.json(arrayOfTips[id]);

});

routes.delete('/tips', (req, res) => {

  let itemToDelete = req.body.id;
  delete arrayOfTips[itemToDelete]; 

  res.json(arrayOfTips);
});






/**
 * GET /list
 *
 * This is a sample route demonstrating
 * a simple approach to error handling and testing
 * the global error handler. You most certainly want to
 * create different/better error handlers depending on
 * your use case.
 */
routes.get('/list', (req, res, next) => {
  const { title } = req.query;

  if (title == null || title === '') {
    // You probably want to set the response HTTP status to 400 Bad Request
    // or 422 Unprocessable Entity instead of the default 500 of
    // the global error handler (e.g check out https://github.com/kbariotis/throw.js).
    // This is just for demo purposes.
    next(new Error('The "title" parameter is required'));
    return;
  }

  res.render('index', { title });
});

export default routes;
