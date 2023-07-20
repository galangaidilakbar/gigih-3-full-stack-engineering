/*
Task:
    1. Create a database that stores the following information:
        - Songs, containing the following data: the title of the song, the name of the artist(s), and the album
        - Artists, containing the following data: name, date of birth, genre(s)
        - Popular Songs, containing the following data: the title of the song, how many times it’s played, period of time
    2. Populate the database you’ve created above with at least 10 data for each collection
*/

/* Answer */

// 1. Create database with name module_3_1
use module_3_1

/* function to generate random date for dateOfBirth and period */
function generateRandomDate(from, to) {
    return new Date(
        from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
}

/*
Create collections with name songs with fields:
    - title: string
    - artists: array of object
    - album: string

Then insert 1000 documents to songs collection.
*/
for (let index = 0; index < 1000; index++) {
    db.songs.insertMany([
        {
            title: `Song ${index + 1}`,
            artists: [
                { name: `Artist ${index + 1}` },
                { name: `Artist ${index + 2}` }
            ],
            album: `Album ${index + 1}`
        },
    ]);
}

/*
Create collections with name artists with fields:
    - name: string
    - dateOfBirth: date
    - genres: array of object

Then insert 1000 documents to artists collection.
*/
for (let index = 0; index < 1000; index++) {
    db.artists.insertMany([
        {
            name: `Artist ${index + 1}`,
            dateOfBirth: generateRandomDate(new Date(1980, 0, 1), new Date(2005, 0, 1)),
            genres: [
                { name: `Genre ${index + 1}` },
                { name: `Genre ${index + 2}` }
            ]
        },
    ]);
}

/*
Create collections with name popularSongs with fields:
    - title: string
    - playCount: number
    - period: date

Then insert 1000 documents to popularSongs collection.
*/
for (let index = 0; index < 1000; index++) {
    db.popularSongs.insertMany([
        {
            title: `Song ${index + 1}`,
            playCount: Math.floor(Math.random() * 1000),
            period: generateRandomDate(new Date(2023, 0, 1), new Date()),
        },
    ]);
}
