const express = require('express');

const app = express();

const morgan = require('morgan');
morgan('tiny');

app.use(express.json())

app.get('/', (req,res) => {
    res.send({"ping":"pong"})
})

module.exports = app;