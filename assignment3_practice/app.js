const path = require('path');

const express = require('express');

const file1 = require('./routes/file1');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(file1);
app.listen(3000);