const callback = require('./callback');

function getUser(req, res, User) {
  User.findOne({ userIdentifier: req.params.id }, (err, user) => {
    if (err) res.status(404);
    else if (user == null) {
      const userToCreate = {
        userIdentifier: req.params.id,
        user: req.body.nickname
      };
      User.create(userToCreate, callback(res));
    } else {
      res.json(user);
      res.status(200);
    }
  });
}

module.exports = getUser;
