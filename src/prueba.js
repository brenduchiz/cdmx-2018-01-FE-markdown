
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

// Ruta 

// let prueba = process.argv[1];
// console.log(prueba);
/* fs.readdir('./js', (err, items) =>{
  if (err) {
    console.log(error); 
  } else {
    const arrayExtension = items;
    const result = arrayExtension.filter(arrayExtension => path.extname(arrayExtension) === '.md');
    console.log(result);
  }
});*/

let routeFilee = './README.md';

const route = (routeFilee) => {
  if (path.isAbsolute(routeFilee) !== true) {
    // Conversion ruta absoluta.
        
    routeAbsolute = path.resolve(routeFilee);
  } else {
    console.log(error);
  }
  return routeAbsolute;
};
route(routeFilee);


const link = () => {
  const promesa1 = new Promise((resolve, reject)=>{
    fs.readFile(routeAbsolute, 'utf8', (err, file) => {
      if (err) {
        reject('error');
      } else {
        const expression = /\[([^\[\]]*)\]\(((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}))\)/g;
        const regex = new RegExp(expression);
        // Array de strings
        const readLinks = file.match(regex);
       
        resolve(readLinks);
      }
    });
  });
  return promesa1;
};

const validate = (url) => {
  const promesa2 = new Promise((resolve, reject)=>{
    const dataArray = url.map((item) =>{
      const newArray = item.split(/\[([^[\]]*)\]\(([^()]*)\)/g);
      let linksArray;
      fetch(newArray[2]);
      if (status === 404) {
        linksArray = { 
          hrf: newArray[2],
          tsext: newArray[1],
          file: routeAbsolute,
          status: 'Link roto'
        };
      } else { 
        linksArray = { 
          hrf: newArray[2],
          text: newArray[1],
          file: routeAbsolute,
          status: 'Link activo'  
        };
      }
      resolve(linksArray);
    });
  });


  return promesa2;
};


link()

  .then(validate)


  .then(result1 => { 
    console.log(result1);
  });


// 
// const promesa3 = new Promise((resolve, reject)=>{
//   resolve('Tercera exitosa')
// })