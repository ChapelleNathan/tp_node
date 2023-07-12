const { resolve } = require('path');
const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.static(resolve('public')));
app.use(router);

module.exports = app;