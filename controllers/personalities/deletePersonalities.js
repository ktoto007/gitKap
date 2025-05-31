const { Personalities } = require("../../models/personalities");
const { deleteImgInCloudinary } = require("../../utils");
const { HttpError } = require("../../helpers");

const deletePersonalities = async (req, res) => {
  const { id: personalitiesId } = req.params;

  const { photo } = await Personalities.findOne({ _id: personalitiesId });

  deleteImgInCloudinary(photo);

  const result = await Personalities.findByIdAndDelete(personalitiesId);

  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(204).json();
};

module.exports = deletePersonalities;
