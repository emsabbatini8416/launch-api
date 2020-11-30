const express = require('express');
const router = express.Router();
const controller = require('./favorite.controller');

router.get('/', controller.getAll);

module.exports = router;