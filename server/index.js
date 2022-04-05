const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js');
const mondels = require('../database/models.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});