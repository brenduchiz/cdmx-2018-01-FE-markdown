#!/usr/bin/env node
let routeAbsolute;
const path = require('path');
var fs = require('fs');
// const fetch = require('node-fetch');

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

const regularExp = (cadena)=> {
  const expression = /\[([^\[\]]*)\]\(((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}))\)/g;
  const regex = new RegExp(expression);
  // Array de strings
  const readLinks = cadena.match(regex);
  data(readLinks);
};


const data = (readLinks) => {
  let dataArray = readLinks.map((item) =>{
    const newArray2 = item.split(/\[([^[\]]*)\]\(([^()]*)\)/g);
  

    let information = {
      href: newArray2[2],
      text: newArray2[1],
      file: routeAbsolute
    };
    return information;
   
  });
  console.log(dataArray)
  return dataArray;
  
};
