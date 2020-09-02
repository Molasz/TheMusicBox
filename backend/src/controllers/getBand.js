function getBand(req, res, Band) {
  const { id } = req.params;
  Band.findById(id, (err, band) => {
    if (err) res.send(err);
    else {
      res.status(200);
      res.json(band);
    }
  });
}

module.exports = getBand;
