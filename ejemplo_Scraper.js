
/**
 * Utilizamos Axios para hacer Promesas basado cliente HTTP para el navegador y node.js
 * Cheerio para crear jQuery diseñada específicamente para el servidor.
 */
let axios = require('axios');
let cheerio = require('cheerio');

/**
 * Declaramos la variable _url de la que obtendremos la informacion
 */
let _url = 'https://cinemex.com/checkout/20866939/?ref=bb';

axios.get(_url).then( (response) => {
  let $ = cheerio.load(response.data);
  let cinemex = [];

  $('.movie-details-info').each( (i, elm) => {
    cinemex.push( {
      Cartelera: {
        Titulo: $(elm).children().eq(1).text(),
        Clasificacion: $(elm).children().eq(3).text(),
        Version: $(elm).children().eq(5).text(),
        Dia: $(elm).children().eq(7).text(),
        Horario: $(elm).children().eq(9).text(),
        Cine: $(elm).children().eq(11).text(),
        Sala: $(elm).children().eq(13).text()
      }
    });
  });
  return(cinemex);
})

.then ( (cinemex) => {
  console.log(cinemex);

});
