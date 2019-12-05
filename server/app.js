const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const requestPromise = require('request-promise');
const app = express();

// database connect
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/revitalize");

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

// set up body parser to parse request response with encoded urls
app.use(bodyParser.urlencoded({ extended: true }));

// Set up View Engine
app.set('view engine', 'ejs');

const baseApiUrl = 'http://www.omdbapi.com/';
const apiKeyParam = { param: 'apikey', value: 'thewdb' };

// new schema
const massageSchema = new mongoose.Schema({
	type: String,
	price: Number,
});

const Massage = mongoose.model("Massage", massageSchema);

// endpoints
app.get('/', (req, res) => res.render('index.ejs'));
app.get('/bye', (req, res) => res.send('see ya!'));
app.get('/dog', (req, res) => res.send('MIEW!'));
app.get('/massages', (req, res) => res.send({ message: 'this is a massage' }));
app.get('/massage/:type', (req, res) => {
	const massageType = req.params.type;
	res.render('massage.ejs', { massageType });
});
app.post('/myname', (req, res) => res.send('YOUR FIRST SUCCESSFUL POST!'));
app.get('/movies', (req, res) => {
	const url = [baseApiUrl, '?', 's=', req.query.search, '&', apiKeyParam.param, '=', apiKeyParam.value].join('');

	return requestPromise(url)
		.then(apiRes => res.send(JSON.parse(apiRes)))
		.catch(err => console.log(err))
});
app.get('*', (req, res) => res.send('YOU ARE THE BEST OUT THERE!'));


// start the server
app.listen(3000, () => console.log('listening on port 3000'));
