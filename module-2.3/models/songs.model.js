const songsModel = [
    {
        id: 1,
        name: 'Song 1',
        url: "https://www.sousound.com/music/healing/healing_01.mp3",
        playCount: 10,
        duration: 3.23,
        artist: [
            {name: 'Artist 1'},
            {name: 'Artist 2'},
        ],
    },
    {
        id: 2,
        name: 'Song 2',
        url: "https://www.sousound.com/music/healing/healing_02.mp3",
        playCount: 5,
        duration: 3.23,
        artist: [
            {name: 'Artist 1'},
            {name: 'Artist 2'},
        ],
    }
];

function getAllSongs() {
    return songsModel;
}

function getSongById(id) {
    return songsModel.find(song => song.id === id);
}

function storeSong(name, url, duration, artists) {
    let newSong = {
        id: generateSongId(),
        name: name,
        url: url,
        playCount: 0,
        duration: duration,
        artist: artists,
    };

    songsModel.push(newSong);

    return newSong;
}

function generateSongId() {
    return songsModel.length + 1;
}

module.exports = {
    getAllSongs,
    getSongById,
    storeSong,
}
