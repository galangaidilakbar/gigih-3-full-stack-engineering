const playlistsModel = [
    {id: 1, name: 'Daily Mix 1'},
    {id: 2, name: 'Daily Mix 2'},
    {id: 3, name: 'Daily Mix 3'},
    {id: 4, name: 'Daily Mix 4'},
    {id: 5, name: 'Daily Mix 5'},
    {id: 6, name: 'Daily Mix 6'},
    {id: 7, name: 'Daily Mix 7'},
    {id: 8, name: 'Daily Mix 8'},
    {id: 9, name: 'Daily Mix 9'},
    {id: 10, name: 'Daily Mix 10'},
]

function getPlaylists() {
    return playlistsModel;
}

module.exports = {
    getPlaylists
}