const express = require('express');
const app = express();

// / -> Hi There
app.get('/', (req, res) => {
	res.send('Hi there!');
});

// /bye -> See ya
app.get('/bye', (req, res) => res.send('see ya!'));

// /dog -> MIEW
app.get('/dog', (req, res) => res.send('MIEW!'));

app.get('*', (req, res) => res.send('YOU ARE THE BEST OUT THERE!'))

app.listen(3000, () => console.log('listening on port 3000'));