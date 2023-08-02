const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const request = require('request');

const app = express();
app.use(cors()).use(cookieParser());
const port = 3000;

const client_id = '4ca53b0bce0b4b4facde56bfed02aa9e';
const client_secret = '17925d0af9dd4148b0767c4de0abaf0c';
const redirect_uri = 'http://localhost:3000/auth/callback';
const stateKey = 'spotify_auth_state';

const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

app.get('/auth/redirect', (req, res) => {
    const state = generateRandomString(16);
    res.cookie(stateKey, state);
    const scope = 'user-read-private user-read-email playlist-read-private';

    const args = new URLSearchParams({
        response_type: 'code',
        client_id,
        scope,
        redirect_uri,
        state,
    });

    res.redirect(`https://accounts.spotify.com/authorize?${args.toString()}`);
});

app.get('/auth/callback', (req, res) => {
    const {code, state} = req.query;
    const storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#/error/state mismatch');
    } else {
        res.clearCookie(stateKey);
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code,
                redirect_uri,
                grant_type: 'authorization_code',
            },
            headers: {
                'Authorization': `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
            },
            json: true,
        };

        request.post(authOptions, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const {access_token, refresh_token} = body;

                const args = new URLSearchParams({
                    access_token,
                    refresh_token,
                });

                res.redirect(`http://localhost:5173?${args.toString()}`);
            } else {
                res.redirect('http://localhost:5173/error/invalid token');
            }
        });
    }
});

app.get('/profile', (req, res) => {

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});