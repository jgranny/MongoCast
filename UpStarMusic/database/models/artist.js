const mongoose = require('mongoose');
const AlbumSchema = require('./album');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumSchema]
});

//Since album is an imbedded item in the artist model, album it's self is not a
// model, it is only a schema

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;
