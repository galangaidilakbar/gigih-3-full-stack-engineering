const {getAllPlaylists} = require('../models/playlists.model');
const {getPlaylistSongsByPlaylistId} = require('../models/playlistSong.model');
const {getAllSongs} = require('../models/songs.model');

// GET all playlists
function get() {
    return getAllPlaylists();
}

const find = (id, sort = undefined) => {
    // Get playlist by id
    const playlist = getAllPlaylists().find(playlist => playlist.id === id);

    // Throw error if playlist not found
    if (!playlist) {
        throw new Error(`Playlist with id ${id} not found`);
    }

    // Get all playlist songs
    const playlistSongs = getPlaylistSongsByPlaylistId(id)

    // Get all songs
    const songs = [];

    // Loop through playlist songs and get song by id
    playlistSongs.forEach(playlistSong => {
        const song = getAllSongs().find(song => song.id === playlistSong.songId);
        songs.push(song);
    });

    // Sort songs by play count
    if (sort && sort === 'most-played') {
        songs.sort((a, b) => b.playCount - a.playCount);
    }

    // Add songs to playlist
    const playlistWithSongs = {
        ...playlist,
        songs
    }

    // Return playlist with songs if playlist has songs, otherwise return playlist
    return playlistSongs.length === 0 ? playlist : playlistWithSongs;
}

module.exports = {
    get, find
}