const playlistSongData = require('../../datasets/playlistSongData.json');
const songsData = require('../../datasets/songsData.json');
const playlistsData = require('../../datasets/playlistsData.json');
const express = require('express');
const router = express.Router();

/* GET all songs in a playlist */
router.get('/:playlistId', function (req, res) {
    // get playlist id from request
    const playlistId = req.params.playlistId;

    // if no playlist with playlistId
    if (!playlistsData.find(playlist => playlist.id === parseInt(playlistId))) {
        return res.status(404).json({
            message: `Playlist ${playlistId} not found`
        });
    }

    // get all playlistSongs with playlist_id === playlistId
    const playlistSongs = playlistSongData.filter(playlistSong => playlistSong.playlist_id === playlistId);

    // initialize songs array
    const songs = [];

    // get song data for each playlistSong
    playlistSongs.forEach(playlistSong => {
        // if playlistSong.song_id === songsData.id
        const song = songsData.find(song => song.id === parseInt(playlistSong.song_id));

        // push song to songs array
        songs.push(song);
    });

    // rearrange response
    const properResponse = {
        id: playlistId,
        name: playlistsData.find(playlist => playlist.id === parseInt(playlistId)).name,
        songs: songs
    };

    return res.json({
        message: `All songs in playlist ${playlistId}`,
        data: properResponse
    });
});

/* POST add a song to a playlist */
router.post('/:playlistId/songs', function (req, res, next) {
    const newPlaylistSong = {
        playlist_id: req.params.playlistId,
        song_id: req.body.song_id
    }

    playlistSongData.push(newPlaylistSong);

    return res.json({
        message: "Song added to playlist successfully",
        data: newPlaylistSong
    });
});

module.exports = router;
