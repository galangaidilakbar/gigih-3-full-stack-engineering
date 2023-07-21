const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

/* POST Store new movie */
router.post('/post', async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        year: req.body.year
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

/* GET All movies */
router.get('/getAll', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

/* GET One movie */
router.get('/get/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.json(movie);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

/* PATCH Update one movie */
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const updatedMovieData = req.body;

        const options = {new: true};

        const result = await Movie.findByIdAndUpdate(id, updatedMovieData, options);

        res.json(result);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

/* DELETE Delete one movie */
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const result = await Movie.findByIdAndDelete(id);

        res.json(result);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

module.exports = router;