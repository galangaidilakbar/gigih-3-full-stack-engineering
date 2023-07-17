const {getAllSongs, getSongById, storeSong} = require('../models/songs.model');

/* get all songs */
function get() {
    return getAllSongs();
}

/* find a song by id */
function find(id) {
    // if no id is provided, throw an error
    if (!id) {
        throw new Error('Id is required');
    }

    // if id is not a number, throw an error
    if (typeof id !== 'number') {
        throw new Error('Id must be a number');
    }

    // get the song by id
    const song = getSongById(id);

    // if no song is found, throw an error
    if (!song) {
        throw new Error('Song not found');
    }

    // increment the play count
    song.playCount++;

    return song;
}

/* store a new song */
function store(name, url, duration, artists) {
    // if no name is provided, throw an error
    if (!name) {
        throw new Error('Name is required');
    }

    // if no url is provided, throw an error
    if (!url) {
        throw new Error('Url is required');
    }

    // if no duration is provided, throw an error
    if (!duration) {
        throw new Error('Duration is required');
    }

    // if no artists is provided, throw an error
    if (!artists) {
        throw new Error('Artists is required');
    }

    // store the song
    return storeSong(name, url, duration, artists);
}

/* get most played songs */
/* export the functions */
module.exports = {
    get, find, store
}