const express = require('express');
const debug = require('debug')('app');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');

const { audience, issuer, jwksUri } = require('./config/auth0');

const Band = require('./src/models/bandModel');
const User = require('./src/models/userModel');

const app = express();
const { PORT: port } = process.env;

mongoose.connect('mongodb://localhost/TheMusicBox');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri
  }),
  audience,
  issuer,
  algorithms: ['RS256']
});

app.get('/', (req, res) => {
  res.send('My server works!');
});

app.get('/authorized', (req, res) => {
  res.send('Secured Resource');
});

const bandRouter = require('./src/routes/bandRoutes')(Band);

app.use('/band', bandRouter);

const authRouter = require('./src/routes/authRoutes')(User);

app.use('/auth', jwtCheck, authRouter);

app.listen(port, debug(`Server is running at port ${port}`));
