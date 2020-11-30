const express = require('express');
const router = express.Router();
const controller = require('./launch.controller');
const controllerFavorite = require('./../favorite/favorite.controller');

router.get('/', controller.getAll);
router.put('/:fligthNumber/addFavorite', controllerFavorite.addFavorite);
router.put('/:fligthNumber/removeFavorite', controllerFavorite.removeFavorite);

module.exports = router;