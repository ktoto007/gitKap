const { ctrlWrapper } = require("../../helpers");
const getAllPersonalities = require("./getPersonalities")
const getPersonalityById = require("./getPersonalityById");
const addPersonalities = require("./addPersonalities");
const updatePersonalities = require("./updatePersonalities");
const deletePersonalities = require("./deletePersonalities");

module.exports = {
  getAllPersonalities: ctrlWrapper(getAllPersonalities),
  getPersonalityById: ctrlWrapper(getPersonalityById),
  addPersonalities: ctrlWrapper(addPersonalities),
  updatePersonalities: ctrlWrapper(updatePersonalities),
  deletePersonalities: ctrlWrapper(deletePersonalities),
};
