const express = require('express');

const bandRouter = express.Router();

function routes(Band) {
  bandRouter.route('/:id').get((req, res) => {
    const { id } = req.params;
    Band.findById(id, (err, band) => {
      if (err) res.send(err);
      else {
        res.status(200);
        res.json(band);
      }
    });
  });
  return bandRouter;
}

module.exports = routes;
