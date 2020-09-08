const express = require('express');

const getUser = require('../controllers/getUser');

const authRouter = express.Router();

function routes(User) {
  authRouter.route('/:id').post(getUser(User));

  return authRouter;
}

module.exports = routes;
