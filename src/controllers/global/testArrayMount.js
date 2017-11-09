// módulo testArrayMount.js
// Just to mount a test array

export const testArrayMount = function () {
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
    
    let testArray = [ tip01, tip02, tip03, tip04, tip05, tip06];
    return testArray;
  } 

 // export { testArrayMount };