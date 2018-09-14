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


const data = (readLinks) => {
  let dataArray = readLinks.map((item) =>{
    const newArray = item.split(/\[([^[\]]*)\]\(([^()]*)\)/g);
  
  
    fetchStatus(newArray);
  });
};

let fetchStatus = (newArray) => {
  let linksArray; 
  fetch(newArray[2])

    .then(resolve => {
      if (resolve.status === 404) {
        linksArray = { 
          hrf: newArray[2],
          text: newArray[1],
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
      return linksArray;
    })
    
    .then(result => { 
      console.log(result);
    })
    .catch(error => {
      console.log('Error', error);
    });
};


const mdLinks = (path, options) => {
  if (options === 'argumento') {
    // First Option
    route(path, (routeAbsolute) => {
      fs.readFile(routeAbsolute, 'utf8', (err, file) => {
        if (err) {
          console.log('error');
        } 
  
        const expression = /\[([^\[\]]*)\]\(((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}))\)/g;
        const regex = new RegExp(expression);
        // Array de strings
        const readLinks = file.match(regex);
        readLinks.forEach(function(array) {
          console.log(array); // datos links 
          data(readLinks);
        });
      });
    });
  } else if (options === 'validate') {
    console.log(options);
  } else if (options === 'stats') {
    console.log(options);
  }
};


module.exports = { 
  
  mdLinks,
  route,
  data


};

