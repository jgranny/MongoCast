const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {

  it('requires a user name', () => {
    const user = new User({ name: undefined });
    //validateSync function is a synchronous function
      //validate function is async
    const validationResult = user.validateSync()
    const { message } = validationResult.errors.name

    assert(message === 'Name is required.')
  });

});
