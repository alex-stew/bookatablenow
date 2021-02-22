// Dependencies
<<<<<<< HEAD
const express = require("express");
const path = require("path");

=======

const express = require('express');
const path = require('path');

>>>>>>> 56c065c82ca72f64f85a47d3f685e73a521a0a39
// Sets up the Express App

const app = express();
const PORT = 3000;

<<<<<<< HEAD
const bookings = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/table', (req, res) => res.sendFile(path.join(__dirname, 'table.html')));
console.log(__dirname);
=======
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Existing dinner reservations (DATA)

const reservation = [{
        name: 'Alex',
        email: 'alex@email.com',
        phone: '0400 000 000',
        id: '1234',
    },
    {
        name: 'Bella',
        email: 'bella@email.com',
        phone: '0400 200 000',
        id: '5678',
    },
    {
        name: 'Andy',
        email: 'andy@email.com',
        phone: '0400 100 000',
        id: '9765',
    },
];

// Routes

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

// Displays all booked tables
app.get('/api/tables', (req, res) => res.json(reservation));


// Displays a single character, or returns false
app.get('/api/reservation/:reservation', (req, res) => {
    const chosen = req.params.reservation;

    console.log(chosen);

    /* Check each character routeName and see if the same as "chosen"
     If the statement is true, send the character back as JSON,
     otherwise tell the user no character was found */

    for (let i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post('/api/characters', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newCharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
    console.log(newCharacter);

    characters.push(newCharacter);
    res.json(newCharacter);
});

// Starts the server to begin listening
>>>>>>> 56c065c82ca72f64f85a47d3f685e73a521a0a39

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));