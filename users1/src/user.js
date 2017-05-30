//----------Import mongoose and Schema Obj----------//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./post');

//----------Create User Schema----------//
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  //Ex 1 of option for posts
  posts: [PostSchema],
  likes: Number,
  //Ex 2 of option for posts
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'blogPost'
  }]
});

//Calling virtual tells userschema to expect a virtual property
//Use function literal instead of arrow func because an arrow func would refer
// this entire file. The function literal refers to UserSchema
UserSchema.virtual('postCount').get(function() {
  return this.posts.length;
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
