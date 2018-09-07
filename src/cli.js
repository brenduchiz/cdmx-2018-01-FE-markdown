#!/usr/bin/env node

const mdLinks = require('./index');

const argv = require('yargs')
  .options({
    
    'validate': {
      type: 'boolean',
      default: 'false',
      description: 'Valida los links de un archivo markdown'
    },
    'stats': {
      type: 'boolean',
      default: 'false',
      description: 'Muestra estadisticas básicas sobre los links encotrados en el archivo markdown'
    }
  })

  .help()
  .argv;

// console.log(argv._[0]);//argumento

if (argv.validate) {
 let validate = true;
 mdLinks(argv._[0],validate)
} else if (argv.stats) {
  let stats = false ;
  mdLinks(argv._[0],stats)
}





// .then( data => {
// console.log(data)
// })
//mdLinks(argv._[0],argv.stats);