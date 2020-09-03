const express = require('express');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const Band = require('./src/models/bandModel');
const User = require('./src/models/userModel');

const app = express();
const { PORT: port } = process.env;

mongoose.connect('mongodb://localhost/TheMusicBox');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('My server works!');
});

const bandRouter = require('./src/routes/bandRoutes')(Band);

app.use('/band', bandRouter);

const authRouter = require('./src/routes/authRoutes')(User);

app.use('/auth', authRouter);

app.listen(port, debug(`Server is running at port ${port}`));
