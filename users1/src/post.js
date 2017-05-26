//----------Import mongoose and Schema Obj----------//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//----------Create Post Schema----------//
const PostSchema = new Schema({
  title: String
});

module.exports = PostSchema;
