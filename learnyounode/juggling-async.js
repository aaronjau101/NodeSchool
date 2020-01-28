'use strict'

const http = require('http');
let results = [];
let count = 0;

function HTTPget(index) {
	http.get(process.argv[index + 2], function(res) {
		res.setEncoding('utf8');
		let allData = '';
		res.on('data', function(data) {
			allData += data;
		});
		res.on('end', function() {
			try {
				results[index] = allData;
				count += 1;
				if(count == 3) {
					for(var a of results) {
						console.log(a);
					}
				}
			} catch (e) {
		     	console.error(e.message);
		    }
		});
	}).on('error', console.error);
}


for(let i = 0; i < 3; i++) {
	HTTPget(i);
}