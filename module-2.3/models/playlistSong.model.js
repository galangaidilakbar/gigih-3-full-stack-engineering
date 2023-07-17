const playlistSongModel = [
    {playlistId: 1, songId: 1},
    {playlistId: 1, songId: 2},
    {playlistId: 1, songId: 3},
    {playlistId: 1, songId: 4},

    {playlistId: 2, songId: 1},
    {playlistId: 2, songId: 2},
]

function getPlaylistSongsByPlaylistId(id) {
    return playlistSongModel.filter(playlistSong => playlistSong.playlistId === id);
}

// get songs in the playlist
// get songs in the playlist


module.exports = {
    getPlaylistSongsByPlaylistId
};