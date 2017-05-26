//----------Import mongoose and Schema Obj----------//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----------Create User Schema----------//
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  postCount: Number
});

//Notes
  // ln (name: String) create name attribute and expect it to be of type String (String is native to JS)

//----------Create User Model----------//
const User = mongoose.model('user', UserSchema);

//Notes
  //Models create instances
  // ln (const User) Assign User to model
    // 1st argument: 'user' controls what model looks like in the DB
    // 2nd argument: Instructs mongoose what schema to use

//----------Export Model Class----------//
//Typical to export class only
module.exports = User;
