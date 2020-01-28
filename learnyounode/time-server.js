'use strict'

const net = require('net');

const server = net.createServer(function(socket) {
	//socket handling logic
	let date = new Date();
	let year = date.getFullYear();
	let month = fillZero(String(date.getMonth() + 1));
	let day = fillZero(String(date.getDate()));
	let hours = fillZero(String(date.getHours()));
	let minutes = fillZero(String(date.getMinutes()));
	let time = year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";
	socket.end(time, "utf8");
});

server.on('error', (err) => {
  throw err;
});

server.listen(process.argv[2]);

function fillZero (str) {
	if(str.length < 2) {
		return "0" + str;
	} else {
		return str;
	}
}