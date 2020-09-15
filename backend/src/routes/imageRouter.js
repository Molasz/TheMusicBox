const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(
      __dirname,
      '..',
      '..',
      'public',
      'upload',
      `${Date.now()}`
    );
    fs.mkdirSync(uploadsDir);
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

const imageRouter = express.Router();

const controller = require('../controllers/image');

function routes() {
  imageRouter
    .route('/log-entries/:log_entry_id')
    .get(controller.index)
    .post(upload.single('file'), controller.create);

  imageRouter
    .route('/log-entries/:log_entry_id/:id')
    .get(controller.show)
    .delete(controller.destroy);

  return imageRouter;
}

module.exports = routes;
