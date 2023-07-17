const express = require('express');
const router = express.Router();
const {get, find} = require('../services/playlists.service');

/* GET all playlists. */
router.get('/', (req, res) => {
    res.json(get());
});

/* GET playlist by id. */
router.get('/:id', (req, res) => {
    // get id from url
    const id = parseInt(req.params.id);

    // get sort from query
    const sort = req.query.sort;

    try {
        res.json(find(id, sort));
    } catch (e) {
        res.status(404).json({message: e.message});
    }
});

module.exports = router;
