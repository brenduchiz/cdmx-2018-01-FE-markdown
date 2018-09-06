#!/usr/bin/env node
let routeAbsolute;
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


const route = (routeFile, callBack) => {
  if (path.isAbsolute(routeFile) !== true) {
    // Conversion ruta absoluta.
        
    routeAbsolute = path.resolve(routeFile);
    callBack(routeAbsolute);
  } else {
    console.log(error);
  }
};
  

route('./README.md', (routeAbsolute) => {
  fs.readFile(routeAbsolute, 'utf8', (err, file) => {
    if (err) {
      console.log('error');
    } 
    
    regularExp(file);
  });
});


// Regex
const regularExp = (cadena)=> {
  const expression = /\[([^\[\]]*)\]\(((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}))\)/g;
  const regex = new RegExp(expression);
  // Array de strings
  const readLinks = cadena.match(regex);
  data(readLinks);
};


const data = (readLinks) => {
  let dataArray = readLinks.map((item) =>{
    const newArray = item.split(/\[([^[\]]*)\]\(([^()]*)\)/g);
  

    let datainfo = {
      
      text: newArray[1],
      file: routeAbsolute
    };
  
    const arrayLink = newArray[2];


    fetch(arrayLink).then(resolve => {
      if (resolve.status === 404) {
        datainfo['hrf'] = arrayLink;
        datainfo['status'] = 'Liga rota ';
      } else { 
        datainfo['hrf'] = arrayLink;
        datainfo['status'] = 'Liga activa';
      }
     
      return datainfo;
    })
    
      .then(statusLinks => { 
        console.log(statusLinks);
      })
      .catch(error => {
        console.log('Error', error);
      });
  });

  return dataArray;
};


