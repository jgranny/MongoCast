const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//Calling promise fixes deprecation warning
mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/mmuber');
}

//Invoke json
//The bodyParser call must be above the routes call
app.use(bodyParser.json());
routes(app);

module.exports = app;
