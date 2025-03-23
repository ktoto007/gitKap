const { Personalities } = require("../../models/personalities");
const { HttpError } = require("../../helpers");

const getOnePersonalities = async (req, res) => {
  const { id: personalitiesId } = req.params;

  const result = await Personalities.findOne({ _id: personalitiesId });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(result);
};

module.exports = getOnePersonalities;
