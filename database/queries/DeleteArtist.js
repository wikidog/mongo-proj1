const Artist = require('../models/artist');

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = (_id) => {
  //
  // .findByIdAndRemove(_id) is not preferred because it requires
  //   2 steps (hits DB 2 times): find the record, and then delete it.
  //
  // .remove() method is the preferred way here because it is one step action
  //
  return Artist.remove({ _id });
};
