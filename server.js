'use strict'
const express = require('express');
const port = process.env.PORT || 8000;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World - 2.0.1');
});

app.listen(port, HOST, () => {
    console.log(`Running on http://${HOST}:${port}`);
});