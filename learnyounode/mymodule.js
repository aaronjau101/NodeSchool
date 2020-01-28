'use strict'

const fs = require('fs');
const path = require('path');

module.exports = function(dirName, extName, callback) {
	fs.readdir(dirName, 'utf8', function read(err, filenames) {
	    if (err) {
	        return callback(err);
	    }

	    let filteredFiles = filenames.filter((file) => path.extname(file) == '.' + extName);+

	    callback(null, filteredFiles);
	});
}