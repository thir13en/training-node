const express = require('express');
const app = express();
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

app.get('*', (req, res) => res.send('YOU ARE THE BEST OUT THERE!'))

app.listen(3000, () => console.log('listening on port 3000'));