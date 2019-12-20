// vendor
const express = 				require('express');
const mongoose = 				require('mongoose');
const bodyParser = 			require('body-parser');
const requestPromise = 	require('request-promise');
const cors = 						require('cors');
// enable environment variables
require('dotenv').config();


// get app instance
const app = express();

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

// set up body parser to parse request response with encoded urls and json type
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mongoose massage schema/model
const massageSchema = new mongoose.Schema({
	type: String,
	price: Number,
	created: { type: Date, default: Date.now() },
});
const Massage = mongoose.model('Massage', massageSchema);

// use Massage.findById to find by id in Mongoose
// use Massage.findByIdAndUpdate to update after finding in Mongoose

// massages restful routes
app.get('/massages', (req, res) => {
	Massage.find(
		{},
		(err, massages) =>
			err ?
				console.log('there was an error retrieving the massages') :
				res.send(massages)
	);
});

app.post('/massages', (req, res) => {
	const type = req.body.type;
	const price = req.body.price;

	Massage.create(
		{ type, price },
		(err, massage) => err ?
			console.log('something went wrong', err) :
			res.send({
				message: 'new massage added',
				massage
			})
	);

});

app.get('/massage/:type', (req, res) => {
	const massageType = req.params.type;
	res.send(massageType);
});

app.get('*', (req, res) => res.send('YOU ARE THE BEST OUT THERE!'));


// start the server
app.listen(3000, () => console.log('listening on port 3000'));
