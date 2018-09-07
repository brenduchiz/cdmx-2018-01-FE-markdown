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
  console.log('validate');
} else if (argv.stats) {
  console.log('stats');
} else {
  mdLinks(argv._[0]);
}


// .then( data => {
// console.log(data)
// })
