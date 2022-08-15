const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const file = require('./routes/index');

app.use(file); 

app.listen(3000);