const express = require('express');

const getBand = require('../controllers/getBand');
const searchBand = require('../controllers/searchBand');

const bandRouter = express.Router();

function routes(Band) {
  bandRouter.route('/search/:text').get(searchBand(Band));
  bandRouter.route('/:id').get(getBand(Band));
  return bandRouter;
}

module.exports = routes;
