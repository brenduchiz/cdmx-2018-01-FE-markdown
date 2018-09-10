#!/usr/bin/env node

const {mdLinks } = require('./index');

const argv = require('yargs')
  .options({
    
    'validate': {
      type: 'boolean',
      default: 'false',
      description: 'Valor que determina si se desea validar los links encontrados en el archivo'
    },
    'stats': {
      type: 'boolean',
      default: 'false',
      description: 'Valor que determina si se desea calcular los stats de de los links encontrados en el archivo'
    }
  })

  .help()
  .argv;

// console.log(argv._[0]);//argumento

if (argv.validate) {
  mdLinks(argv._[0], 'validate');
} else if (argv.stats) {
  mdLinks(argv._[0], 'stats');
} else {
  mdLinks(argv._[0], 'argumento');
};


// .then( data => {
// console.log(data)
// })
// mdLinks(argv._[0],argv.stats);