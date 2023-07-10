const express = require('express');
const app = express();
const port = 3000;

// send hello world for root
app.get('/', (req, res) => {
    console.log('GET /');
    res.send('Hello World!');
})

// serve index.html for /song-app
app.get('/song-app', (req, res) => {
    console.log('GET /song-app');
    res.sendFile(__dirname + '/index.html');
})

// serve songs.json
app.get('/v1/api/songs', (req, res) => {
    console.log('GET /v1/api/songs');
    res.sendFile(__dirname + '/songs.json');
});

// if no route matches, return 404
app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
