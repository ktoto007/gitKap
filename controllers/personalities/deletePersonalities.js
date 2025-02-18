const { Personalities } = require("../../models/personalities");

const { HttpError } = require("../../helpers");

const deletePersonalities = async (req, res) => {
  const { personalitiesId } = req.params;

  const result = await Personalities.deleteOne({ _id: personalitiesId });

  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(204).json();
};

module.exports = deletePersonalities;
