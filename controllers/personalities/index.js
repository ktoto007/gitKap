const { ctrlWrapper } = require("../../helpers");
const getPersonalityById = require("./getPersonalityById");
const addPersonalities = require("./addPersonalities");
const updatePersonalities = require("./updatePersonalities");
const deletePersonalities = require("./deletePersonalities");

module.exports = {
  getPersonalityById: ctrlWrapper(getPersonalityById),
  addPersonalities: ctrlWrapper(addPersonalities),
  updatePersonalities: ctrlWrapper(updatePersonalities),
  deletePersonalities: ctrlWrapper(deletePersonalities),
};
