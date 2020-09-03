const express = require('express');

const authRouter = express.Router();

function routes(User) {
  authRouter.route('/login').post((req, res) => {
    // cosas nazis
  });
  return authRouter;
}

module.exports = routes;
