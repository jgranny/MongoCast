const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  //Do not invoke these functions, they would run immediately
  app.get('/api', DriversController.greeting);

  app.post('/api/drivers', DriversController.create);
};
