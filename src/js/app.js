
const path = require('path');
var fs = require('fs');


// Ruta para buscar el archivo.

const route = (routeFile) => {
  if (path.isAbsolute(routeFile) !== true) {
    // Conversion ruta absoluta.
    
    routeAbsolut = path.resolve(routeFile);
    console.log(routeAbsolut);
  } else {
    routeAbsolut = routefile;
  }
  return routeAbsolut;
};

route('./README.md');


/* fs.readFile('../README.md', 'utf8', function(err, data) {
  
  if (err) throw err;
  let dataReco = '';
  for (let i = 0; i < data.length; i++) {
    let sizeData = data[i];
    dataReco += sizeData;
  }


  // console.log(dataReco)

 let expression = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
  var regex = new RegExp(expression);
  var cadena = dataReco;

  if (cadena.match(regex)) {
    let links = cadena.match(regex);
    console.log(links);
  } else {
    console.log('No match');
  }
});*/

// console.log(process.cwd ())


