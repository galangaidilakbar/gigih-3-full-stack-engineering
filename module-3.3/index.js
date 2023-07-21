require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => console.log('Connected to MongoDB'));

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('Listening on port 3000'));