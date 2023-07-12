const playlistsData = require('../../datasets/playlistsData.json');
const express = require('express');
const router = express.Router();

/* GET all playlists */
router.get('/', function (req, res) {
    return res.json({
        message: "Playlists retrieved successfully",
        data: playlistsData
    });
});

/* POST store playlist  */
router.post('/', function (req, res) {
    const newPlaylist = {
        id: playlistsData.length + 1,
        name: req.body.name,
    };

    playlistsData.push(newPlaylist);

    return res.json({
        message: "Playlist created successfully",
        data: newPlaylist
    });
});

/* GET playlist by id */
router.get('/:id', function (req, res) {
    const playlist = playlistsData.find((playlist) => playlist.id === parseInt(req.params.id));

    if (!playlist) {
        return res.status(404).json({
            message: "Playlist not found",
        });
    }

    return res.json({
        message: "Playlist retrieved successfully",
        data: playlist
    });
});

/* PUT update playlist by id */
router.put('/:id', function (req, res) {
    const playlist = playlistsData.find((playlist) => playlist.id === parseInt(req.params.id));

    if (!playlist) {
        return res.status(404).json({
            message: "Playlist not found",
        });
    }

    playlist.name = req.body.name;

    return res.json({
        message: "Playlist updated successfully",
        data: playlist
    });
});

/* DELETE playlist by id */
router.delete('/:id', function (req, res) {
    const playlist = playlistsData.find((playlist) => playlist.id === parseInt(req.params.id));

    if (!playlist) {
        return res.status(404).json({
            message: "Playlist not found",
        });
    }

    const index = playlistsData.indexOf(playlist);

    playlistsData.splice(index, 1);

    return res.json({
        message: "Playlist deleted successfully",
    });
});

module.exports = router;
