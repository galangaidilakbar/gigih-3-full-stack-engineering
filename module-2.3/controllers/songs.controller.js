const express = require('express');
const router = express.Router();
const {getAllSongs} = require('../models/songs.model');
const {find, store, getMostPlayedSongs} = require('../services/songs.service');

/* GET all songs. */
router.get('/', function (req, res) {
    return res.json(getAllSongs());
});

/* GET most played songs. */
router.get('/most-played', function (req, res) {
    return res.json(getMostPlayedSongs());
});

/* GET a song by id. */
router.get('/:id', function (req, res) {
    try {
        return res.json(find(
            parseInt(req.params.id)
        ));
    } catch (e) {
        return res.status(404).json({message: e.message});
    }
});

/* POST store new song */
router.post('/', function (req, res) {
    try {
        const {name, url, duration, artists} = req.body;
        return res.json(store(name, url, duration, artists));
    } catch (e) {
        return res.status(400).json({message: e.message});
    }
});

module.exports = router;
