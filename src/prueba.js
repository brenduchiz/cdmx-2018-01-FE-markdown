
// const path = require('path');
var fs = require('fs');


fs.stat('./README.md', (err, stat) => {
  console.log(stat.isDirectory());
});


