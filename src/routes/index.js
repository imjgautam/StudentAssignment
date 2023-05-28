const express = require('express');
const app = express();
const student = require('./students.routes');

app.use('/student', student);

module.exports = app;
