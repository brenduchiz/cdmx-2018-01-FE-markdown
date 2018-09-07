#!/usr/bin/env node

// const mdLinks = require('./index');

const argv = require('yargs')
  .options({
    '_': {
      type: 'string',
      description: 'Path to search markdown in',
      demandOption: 'true',
    },
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

//console.log(argv._[0]);//argumento


if (argv.validate) {
  console.log('validate');
} else if (argv.stats) {
  console.log('stats');
}
else {

  console.log(argv._[0])
}