const express = require('express');

const getUser = require('../controllers/getUser');
const addFollow = require('../controllers/addFollow');
const removeFollow = require('../controllers/removeFollow');

const authRouter = express.Router();

function routes(User) {
  authRouter.route('/follow/:id').post(addFollow(User));

  authRouter.route('/followDelete/:id').post(removeFollow(User));

  authRouter.route('/:id').post(getUser(User));

  return authRouter;
}

module.exports = routes;
