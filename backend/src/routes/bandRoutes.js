const express = require('express');

const getBand = require('../controllers/getBand');

const bandRouter = express.Router();

function routes(Band) {
  bandRouter.route('/:id').get((req, res) => getBand(req, res, Band));
  return bandRouter;
}

module.exports = routes;
