const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
let fileAbsolut;

//  Función que valida la ruta si la ruta del archivo es Relativa o Absoluta.
const rutaDoct = (archivo) => {
  // Archivo es el documento README.md
  //  console.log(archivo);
  // 
  if (!path.isAbsolute(archivo)) {
    fileAbsolut = path.resolve(archivo);
    // console.log(fileAbsolut);
    fs.readFile(fileAbsolut, 'utf8', (err, archivo) => {
      if (err) {
        console.log('No se encontro el archivo');
      } 
      searchUrl(archivo);
    });
  }   
};

const searchUrl = (archivo)=>{
  const expression = /\[([^\[\]]*)\]\(((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}))\)/g;
  let leerlinks = archivo.match(expression);
  // console.log(leerlinks); // Arrelgo
  let newArray = leerlinks.map((item) =>{
    const newArray2 = item.split(/\[([^[\]]*)\]\(([^()]*)\)/g);
    // // TODO: 
    // [] crear un objeto literal
    // [] agregar el texto del arreglo en la posión 1 a mi texto del objeto que voya crear 
    // [] agregar el link del areglo en posión 2 a mi href del objeto que voy a crear 
    // [] retornar mi objeto
    // prueba(newArray);

    let information = {
      href: newArray2[2],
      text: newArray2[1],
      file: fileAbsolut
    };
    return information;
  });
  
  // idlinks(leerlinks); 
  console.log(newArray);    
  return newArray;
};




// Esta función recibe un arreglo de links y retorna un arreglo de status de los links, en formato promesa
const idlinks = (array) => {
  // console.log(array);
  return array.map((link) =>{
    // console.log(link);
  });
};
rutaDoct('../filelinks.md');