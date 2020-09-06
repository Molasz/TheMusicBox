const express = require('express');

const getUser = require('../controllers/getUser');

const authRouter = express.Router();
function routes(User) {
  authRouter.route('/:id').post((req, res) => getUser(req, res, User));
  return authRouter;
}

module.exports = routes;
