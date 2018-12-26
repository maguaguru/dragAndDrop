'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const dragAndDropQuestion = require('./dragAndDropQuestion');

const app = express();
const defaultTimeout = 1000;
const baseUrl = '/wpng/api/v1'

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Cache-Control', 'no-cache');
  next();
});

app.get(baseUrl + '/dndquestion', (req, res) => {
  setTimeout(() => res.send(dragAndDropQuestion), defaultTimeout);
});


app.listen(5000, 'localhost');
