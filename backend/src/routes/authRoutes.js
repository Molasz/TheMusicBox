const express = require('express');

const authRouter = express.Router();
function routes(User) {
  authRouter.route('/:id').post((req, res) => {
    User.findOne({ userIdentifier: req.params.id }, (err, user) => {
      if (err) res.send(404);
      else if (user == null) {
        const userToCreate = {
          userIdentifier: req.params.id,
          user: req.body.nickname
        };
        User.create(userToCreate, (error, newUser) => {
          if (error) res.send(404);
          else {
            res.json(newUser);
            res.status(200);
          }
        });
      } else {
        res.json(user);
        res.status(200);
      }
    });
  });
  return authRouter;
}

module.exports = routes;
