const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

const app = express();

//Invoke json
//The bodyParser call must be above the routes call
app.use(bodyParser.json());
routes(app);

module.exports = app;
