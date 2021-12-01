const express = require('express');

const router = express.Router();

const { helloWorld } = require('../controllers/sports.js');

router.get('/hello', helloWorld);

module.exports = router;