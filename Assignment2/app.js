const http = require('http');

const express = require('express');

const app = express();

app.use('/users', (req,res,next) => {
    console.log('This is /users page');
    res.send('<h1>this is /users page');
});

app.use('/', (req,res,next) => {
    console.log('This is / page');
    res.send('<h1>This is home page</h1>');
});



app.listen(3000);