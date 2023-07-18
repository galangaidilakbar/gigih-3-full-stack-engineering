# Module 2.3 - Intro To REST API and Software Architecture

## Homework

> Previous session homework:
> 1. Add song to your playlist
> 2. Play song from your playlist
> 3. Get List of songs from your playlist

Simple Spotify Playlist Server

Continuing **previous session homework** with this additional rule:

1. Make playlist as a model
2. Track song play count in the playlist
3. Add feature to Get list of songs to be sorted by most played

## Answer

Here are the main files and folders of this repo:

- `./controllers` - contains all the controllers for the API
- `./models` - contains all the models for the API
- `./services` - contains all the services for the API
- `./app.js` - Express JS app

### APIs

I created the following APIs to complete the homework:

- `POST /api/playlists/:id/songs` - Add a song to a playlist
- `GET /api/songs/:id` - Get a song by id. When hit it, it will increase the play count of the song by 1.
- `GET /api/playlists/:id` - Get a playlist by id. It also contains the list of songs in the playlist, and can be sorted
  by most played by using `?sort=most-played`

  
In addition, I also created the following APIs to make it easier to test the above APIs:

- `GET /api/playlists` - Get all playlists
- `GET /api/songs` - Get all songs
- `POST /api/songs` - Create a song


### Models

I created the following models:

- `Song` - represents a song
- `Playlist` - represents a playlist
- `PlaylistSong` - represents Many-to-Many Relationship between playlist and song.
