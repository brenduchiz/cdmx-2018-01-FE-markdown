#!/usr/bin/env node

const mdLinks = require('./index');
const program = require('commander');

const exeMdLinks = (path, options) => {
 console.log(path)
} 

program
  .version('1.0.4', ' -v, --version ' )
  .arguments('<path>')
  .option('-val, --validate', 'HTTP request to find out if the link works or not')
  .option('-s, --stats', 'basic statistics about links')
  .action(exeMdLinks);
program.parse(process.argv);





  /*.command('md-links', 'Validar Links dentro de tu archivo .md', {
    validate: {
      demand: true,
      alias: 'val'
    }
  })

  .argv;


console.log(argv);*/