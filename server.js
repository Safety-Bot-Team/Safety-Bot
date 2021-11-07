const express = require('express');
const server = express();

server.get('/', (req, res) => {
	res.send('Bot ist online');
});

function keepAlive() {
	server.listen(8080, () => {
		console.log('Server ist Online!');
	});
}

module.exports = keepAlive;