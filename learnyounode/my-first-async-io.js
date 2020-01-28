'use strict'

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function read(err, buffer) {
    if (err) {
        throw err;
    }

    console.log(buffer.split('\n').length - 1);
});