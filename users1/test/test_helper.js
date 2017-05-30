//----------=----------//
//----------Create Connection----------//
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Makes sure DB is up before running tests
  //Use done callback to tell mocha it is good to run once DB is connected
before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
  .once('open', () => { done(); })
  .on('error', (error) => {
    console.warn('Warning', error);
  });
});

//Notes
  // ln (const mongoose) Code sharing between diff files in Node
  // ln (mongoose.Promise) Mongoose promises are deprecated, this sets up ES6 promises instead
  // ln (mongoose.connect) Mocha starts up ---> connect mongoose to the mongo instance (ex. localhost || 65.45.3.3.2:8000)
    // last part (users_test) looks for the specific database within the mongodb
  // ln (mongoose.connection - console.warn) Check if the connection was successful or not, do things for the respective outcomes

//----------Empty out database after every test runs----------//
beforeEach((done) => {
  //Take all records in users and delete them
  //Mongoose normalizes collection names, so blogPost is all lowercase 'blogpost' in this function
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        // Ready to run the next test
        //Done is a callback passed by mocha, it waits for the above code to run
        // before moving on to the next test
        done();
      });
    });
  });
});
