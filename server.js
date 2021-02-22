// Dependencies
const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = 3000;

const bookings = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/table', (req, res) => res.sendFile(path.join(__dirname, 'table.html')));
console.log(__dirname);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));