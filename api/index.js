const express = require('express');
const router = express.Router();

router.use('/launch', require('./launch'));
router.use('/favorite', require('./favorite'));

module.exports = router;