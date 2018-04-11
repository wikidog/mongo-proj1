const mongoose = require('mongoose');
const AlbumSchema = require('./album');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumSchema],
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
