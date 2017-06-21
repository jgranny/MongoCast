const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

//This is a work around because mongoose mocha and express don't work well together
// mocha will try and call controllers multiple times
const Driver = mongoose.model('driver');

describe('Drivers controller', () => {

  it('Post to /api/drivers creates a new driver', done => {
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

})
