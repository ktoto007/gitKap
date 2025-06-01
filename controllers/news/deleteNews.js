const { News } = require("../../models/news");
const { deleteImgInCloudinary } = require("../../utils");
const { HttpError } = require("../../helpers");

const deleteNews = async (req, res) => {
  const { id: newsId } = req.params;
  const news = await News.findOne({ _id: newsId });

  if (!news) {
    throw HttpError(404, "Not Found");
  }

  for (const photo of news.photos) {
    deleteImgInCloudinary(photo);
  }

  await News.findByIdAndDelete(newsId);

  res.status(204).json();
};

module.exports = deleteNews;
