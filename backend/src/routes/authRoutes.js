const express = require('express');

const authRouter = express.Router();
function routes(User) {
  authRouter.route('/').get((req, res) => res.send('Bon dia'));
  return authRouter;
}

module.exports = routes;
