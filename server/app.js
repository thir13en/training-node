const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = ['http://localhost:4200'];
app.use(cors({
	origin: (origin, callback) => {
		// allow requests with no origin
		// (like mobile apps or curl requests)
		if(!origin) return callback(null, true);
		if(allowedOrigins.indexOf(origin) === -1){
			const msg = 'The CORS policy for this site does not ' +
				'allow access from the specified Origin.';
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	}
}));
app.set('view engine', 'ejs')

// / -> Hi There
app.get('/', (req, res) => {
	res.render('index.ejs');
});

// /bye -> See ya
app.get('/bye', (req, res) => res.send('see ya!'));

// /dog -> MIEW
app.get('/dog', (req, res) => res.send('MIEW!'));

app.get('/massage/:type', (req, res) => {
	const massageType = req.params.type;
	res.render('massage.ejs', { massageType });
});

app.get('massages', (req, res) => {
	res.send('this is a massage')
});

app.get('*', (req, res) => res.send('YOU ARE THE BEST OUT THERE!'))

app.listen(3000, () => console.log('listening on port 3000'));
