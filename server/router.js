const express = require('express');
const router = express.Router()
const controllers = require('./controllers.js');

router.get('/pictures', controllers.getPictures);

module.exports = router;