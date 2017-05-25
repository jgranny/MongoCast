//----------=----------//
//----------Create Connection----------//
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .once('open', () => console.log('Connection to users_test is open...') )
  .on('error', (error) => {
    console.warn('Warning', error);
  });

//Notes
  // ln 1 Code sharing between diff files in Node
  // ln 4 Mocha starts up ---> connect mongoose to the mongo instance (ex. localhost || 65.45.3.3.2:8000)
    // last part (users_test) looks for the specific database within the mongodb
  // ln 5-8 Check if the connection was successful or not, do things for the respective outcomes

//----------=----------//
