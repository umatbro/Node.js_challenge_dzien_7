const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const todo = require('../todo');

const app = express();

const DB_FILE = './data/todos.json';

app.use(bodyParser.json());
app.use(express.static('./public/zadanieDnia/'));


app.listen(3000 , () =>  {
    console.log('Listening on 3000');
});

module.exports = app;