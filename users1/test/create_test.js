//----------Import assert----------//
// assert is native
const assert = require('assert')
const User = require('../src/user')
//----------Top level describe function----------//
describe('Creating records', () => {
  it('saves a user', (done) => {
    //Create a new user with User schema
    const joe = new User({ name: 'Joe' });
    //Save the user to mongo using mongoose command .save()
    joe.save()
      .then(() => {
        //Waits for Joe to save to the DB
        assert(!joe.isNew);
        done();
      });
  });
});

//Notes
  //"Creating records" line has no affect on the tests, can be w/e
  // ln (it('saves a user')) is an statement describing the assertion
//----------=----------//
