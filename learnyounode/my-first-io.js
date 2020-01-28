'use strict'

const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);

const str = buffer.toString();

console.log(str.split('\n').length - 1);

//console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);