const { Personalities } = require("../../models/personalities");
const { deleteImgInCloudinary } = require("../../utils");
const { HttpError } = require("../../helpers");

const deletePersonalities = async (req, res) => {
  const { id: personalitiesId } = req.params;

  const news = await Personalities.findOne({ _id: personalitiesId });

  if (!news) {
    throw HttpError(404, "Not Found");
  }

  deleteImgInCloudinary(news.photo);

  await Personalities.findByIdAndDelete(personalitiesId);

  res.status(204).json();
};

module.exports = deletePersonalities;
