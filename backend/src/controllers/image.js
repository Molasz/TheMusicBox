const path = require('path');

const Image = require('../models/imageModel');

const callback = require('./callback');

exports.index = (req, res) => {
  Image.find({ logEntryId: req.params.log_entry_id }, callback(res));
};

exports.show = (req, res) => {
  Image.findById(req.params.id, callback(res));
};

exports.create = (req, res) => {
  const remove = path.join(__dirname, '..', '..', 'public');
  const relPath = req.file.path.replace(remove, '');
  const newImage = new Image(req.body);
  newImage.path = relPath;
  newImage.save(callback(res));
};

exports.destroy = (req, res) => {
  Image.deleteOne({ _id: req.params.id }, callback(res));
};
