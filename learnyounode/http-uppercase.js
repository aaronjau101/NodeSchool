'use strict'

const http = require('http');
const map = require ('through2-map');

const port = +process.argv[2];

const requestListener = function (req, res) {
	if(req.method!== 'POST') {
		return res.end("send me a POST\n");
	}
	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
}

const server = http.createServer(requestListener);
server.listen(port);