const express = require('express');
const passport = require('passport');

const authRouter = express.Router();

function routes(User) {
  authRouter.route('/login').post((req, res) => {
    passport.authenticate('local', {
      successRedirect: res.send('ok'),
      failureRedirect: res.send('mu mal')
    });
  });

  authRouter.route('/signup').post((req, res) => {
    User.find({ user: req.body.user }, (err, users) => {
      if (err) res.send(err);
      else if (users.length === 0) {
        const newUser = new User({
          user: req.body.user,
          password: req.body.password
        });
        User.create(newUser, (error) => {
          if (err) res.send(error);
          else res.end();
        });
      }
    });
  });

  return authRouter;
}

module.exports = routes;
