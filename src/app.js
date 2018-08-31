
const path = require('path');
var fs = require('fs');

// Ruta para buscar el archivo.

/* const mdLinks = (file) => {
  if (path.isAbsolute(file) !== true) {
    // Conversion ruta absoluta.
    let fileAbsolut = path.resolve(file);
   
   console.log(fileAbsolut);
  } else {


    // let  resolve = require('path').resolve
    fs.readFile(file, function(err, md) {
      if (err) {
        console.log(err);
      }
      console.log(md.toString());
      // console.log(archivo)
    });
  }
};

mdLinks('./README.md');*/


fs.readFile('../README.md', 'utf8', function(err, data) {
  if (err) throw err;
  let dataReco = '';
  for (let i = 0; i < data.length; i++) {
    let sizeData = data[i];
    dataReco += sizeData;
  }


  // console.log(dataReco)

  var expression = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))/g;
  var regex = new RegExp(expression);
  var cadena = dataReco;

  if (cadena.match(regex)) {
    let links = cadena.match(regex);
    console.log(links);
  } else {
    console.log('No match');
  }
});


console.log(process.cwd());

