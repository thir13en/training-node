const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requestPromise = require('request-promise');
const cors = require('cors');
require('dotenv').config();

// get app instance
const app = express();

console.log(process.env.MONGO_DB);
// database connect
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });

// Set up CORS
const allowedOrigins = process.env.ALLOWED_ORIGINS;
app.use(cors({
	origin: (origin, callback) => {
		// allow requests with no origin (like mobile apps or curl requests)
		if(origin && allowedOrigins.indexOf(origin) === -1) {
			const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	}
}));

// set up body parser to parse request response with encoded urls
app.use(bodyParser.urlencoded({ extended: true }));

const baseApiUrl = 'http://www.omdbapi.com/';
const apiKeyParam = { param: 'apikey', value: 'thewdb' };

// new schema
const massageSchema = new mongoose.Schema({
	type: String,
	price: Number,
});

// compile into a model
const Massage = mongoose.model('Massage', massageSchema);
Massage.create(
	{ type: 'californian', price: 111 },
	(err, massage) =>
		err ? console.log('something went wrong', err) : console.log('new massage added', massage)
);

// endpoints
app.get('/', (req, res) => res.send('HOME PAGE'));
app.get('/bye', (req, res) => res.send('see ya!'));
app.get('/dog', (req, res) => res.send('MIEW!'));

// get all massages
app.get('/massages', (req, res) => {
	Massage.find(
		{},
		(err, massages) =>
			err ?
				console.log('there was an error retrieving the massages') :
				res.send(massages)
	);
});

app.get('/massage/:type', (req, res) => {
	const massageType = req.params.type;
	res.send(massageType);
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
