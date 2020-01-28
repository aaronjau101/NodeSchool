'use strict'

const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], 'utf8', function read(err, filenames) {
    if (err) {
        throw err;
    }

    let ext = '.' + process.argv[3];

    let filteredFiles = filenames.filter((file) => path.extname(file) == ext);

    for(let file of filteredFiles) {
    	console.log(file);
    }
});