const passport = require('passport');
const { Strategy } = require('passport-local');

const User = require('../../models/userModel');

function localStrategy() {
  passport.use(
    new Strategy(
      {
        usernameField: 'user',
        passwordField: 'password'
      },
      (username, password, done) => {
        User.findOne({ user: username }, (err, user) => {
          if (err) throw err;
          else if (user.password === password) done(null, user);
          else done(null, false);
        });
      }
    )
  );
}

module.exports = localStrategy;
