const path = require('path');
const express = require('express');
require('dotenv').config({path: path.join(__dirname, '.env')});

const app = express();

// configure Express
app.use(express.static('dist'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, () => {
    console.log('App listening on port 8080')
})