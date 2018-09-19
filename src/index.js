const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

app.listen(4500, () => {
	console.log('Listening on port 4500');
});