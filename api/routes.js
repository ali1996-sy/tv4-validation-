const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/', controllers.hello);

router.post('/addFilm',controllers.addFilm);


module.exports = router;
