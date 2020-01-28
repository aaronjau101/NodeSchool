'use strict'

const http = require('http');

http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');
	let allData = '';
	res.on('data', function(data) {
		allData += data;
	});
	res.on('end', function() {
		try {
			console.log(allData.length);
			console.log(allData);
		} catch (e) {
	     	console.error(e.message);
	    }
	});
}).on('error', console.error);