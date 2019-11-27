const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

// MY FIRST REQUEST TEST
request('http://google.com', (err, res, body) => {
	if (err) {
		console.log('SOMETHING WENT WRONG!', err);
	} else {
		if (res.statusCode === 200) {
			console.log(body);
		}
	}
})

// Set up CORS
const allowedOrigins = ['http://localhost:4200'];
app.use(cors({
	origin: (origin, callback) => {
		// allow requests with no origin (like mobile apps or curl requests)
		if(origin && allowedOrigins.indexOf(origin) === -1){
			const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	}
}));
app.use(bodyParser.urlencoded({ extended: true }));
// Set up View Engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index.ejs'));
app.get('/bye', (req, res) => res.send('see ya!'));
app.get('/dog', (req, res) => res.send('MIEW!'));
app.get('/massage/:type', (req, res) => {
	const massageType = req.params.type;
	res.render('massage.ejs', { massageType });
});
app.get('/massages', (req, res) => {
	res.send({ message: 'this is a massage' })
});
app.post('/myname', (req, res) => res.send('YOUR FIRST SUCCESSFUL POST!'));
app.get('*', (req, res) => res.send('YOU ARE THE BEST OUT THERE!'));

// start the server
app.listen(3000, () => console.log('listening on port 3000'));