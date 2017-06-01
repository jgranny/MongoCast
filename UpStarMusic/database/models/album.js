const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number
});

//Since album is an imbedded item in the artist model, album it's self is not a
// model, it is only a schema

module.exports = AlbumSchema;
