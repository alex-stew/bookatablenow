// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

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
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/table', (req, res) => res.sendFile(path.join(__dirname, 'table.html')));

// Displays all booked tables
app.get('/api/table', (req, res) => res.json(reservation));



// // Displays a single character, or returns false
app.get('/api/reservation/:reservation', (req, res) => {
    const chosen = req.params.reservation;

    console.log(chosen);

    /* Check each character routeName and see if the same as "chosen"
     If the statement is true, send the character back as JSON,
     otherwise tell the user no character was found */

    for (let i = 0; i <= reservation.length; i++) {
        if (chosen === reservation[i].id) {
            return res.json(reservation[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post('/api/tables', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newRes = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newRes.routeName = newRes.name.replace(/\s+/g, '').toLowerCase();
    console.log(newRes);

    reservation.push(newRes);
    res.json(newRes);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));