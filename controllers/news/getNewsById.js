const { News } = require("../../models/news");
const { HttpError } = require("../../helpers");

const getOneNews = async (req, res) => {
  const { id: newsId } = req.params;

  const result = await News.findOne({ _id: newsId });

  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.status(200).json(result);
};

module.exports = getOneNews;
