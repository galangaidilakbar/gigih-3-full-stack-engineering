const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Song App'});
});

/* GET playlist page. */
router.get('/playlists/:id', function (req, res) {
    res.render('playlist', {
        title: 'Playlist - Song App',
        playlistId: req.params.id
    });
});

module.exports = router;
