const express = require('express');

const authRouter = express.Router();

function routes(User) {
  authRouter.route('/login').post((req, res) => {
    console.log(req.body);
    res.send('login');
  });

  authRouter.route('/signup').post((req, res) => {
    console.log(req.body);
    res.send('signup');
  });

  return authRouter;
}

module.exports = routes;
