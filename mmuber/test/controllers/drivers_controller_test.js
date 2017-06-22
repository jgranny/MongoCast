const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

//This is a work around because mongoose mocha and express don't work well together
// mocha will try and call controllers multiple times
const Driver = mongoose.model('driver');

describe('Drivers controller', () => {

  it('POST to /api/drivers creates a new driver', done => {
    Driver.count().then(count => {
      request(app)
      .post('/api/drivers')
      .send({ email: 'test@test.com' })
      .end(() => {

        Driver.count().then(newCount => {
          assert(count + 1 === newCount);
          done();
        });
      });
    });
  });

  it('PUT to /api/drivers/id can update a record', done => {
    const driver = new Driver({ email: 't@t.com', driving: false });
    driver.save().then(() => {
      request(app)
        .put(`/api/drivers/${driver._id}`)
        .send({ driving: true })
        .end(() => {
          Driver.findOne({ email: 't@t.com' })
            .then(driver => {
              assert(driver.driving === true);
              done();
            });
        });
    });
  });

  it('DELETE to api/drivers/:id can delete a driver', done => {
    const driver = new Driver({ email: 'test@test.com' });

    driver.save().then(() => {
      request(app)
        .delete(`/api/drivers/${driver._id}`)
        .end(() => {
          Driver.findOne({ email: 'test@test.com' })
            .then((driver) => {
              assert(driver === null);
              done();
            })
        });
    })
  })

});
