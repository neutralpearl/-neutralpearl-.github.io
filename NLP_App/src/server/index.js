const path = require('path')
const express = require('express')
// const mockAPIResponse = require('./mockAPI.js');
require('dotenv').config();

const app = express()

app.use(express.static('dist'));

// console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('App listening on port 8080')
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

let validatedText = {};

// callback functions for GET and POST routes
const storeText = (req, res) => {
    validatedText = req.body;
    res.status(200).send(validatedText);
    console.log(validatedText);
}; 

const getText = (req, res) => {
    res.status(200).send(JSON.stringify(validatedText));
};

// POST route (allows client-side JS to store last user input from form)
app.post('/text-input', storeText);

// GET route (allows client-side JS to access most recent user input)
app.get('/get-text', getText);
