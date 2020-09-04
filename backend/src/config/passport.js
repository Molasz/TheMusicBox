const passport = require('passport');

require('./strategies/local.strategy')();
// require('./strategies/spotify.strategy')();
// require('./strategies/anonymous.strategy')();

function passportConfig(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}

module.exports = passportConfig;
