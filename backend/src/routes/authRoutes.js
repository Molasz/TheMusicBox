const express = require('express');

const getUser = require('../controllers/getUser');
const addFollow = require('../controllers/addFollow');
const removeFollow = require('../controllers/removeFollow');
const updateUser = require('../controllers/updateUser');
const newBand = require('../controllers/newBand');
const updateBand = require('../controllers/updateBand');
const newDisc = require('../controllers/newDisc');
const removeDisc = require('../controllers/removeDisc');
const newConcert = require('../controllers/newConcert');
const removeConcert = require('../controllers/removeConcert');

const authRouter = express.Router();
const Band = require('../models/bandModel');

function routes(User) {
  authRouter.route('/follow/:id').post(addFollow(User));
  authRouter.route('/followDelete/:id').post(removeFollow(User));
  authRouter.route('/newBand/:id').post(newBand(User, Band));
  authRouter.route('/newDisc/:id').post(newDisc(Band)).patch(removeDisc(Band));
  authRouter
    .route('/newConcert/:id')
    .post(newConcert(Band))
    .patch(removeConcert(Band));
  authRouter.route('/band/:id').patch(updateBand(Band));
  authRouter.route('/:id').post(getUser(User)).patch(updateUser(User));

  return authRouter;
}

module.exports = routes;
