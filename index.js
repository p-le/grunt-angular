const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req. res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

module.exports = app;