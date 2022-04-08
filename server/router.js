const express = require('express');
const router = express.Router()
const controllers = require('./controllers.js');

router.get('/pictures', controllers.getPictures);
router.put('/pictures', controllers.updatePicture);
module.exports = router;