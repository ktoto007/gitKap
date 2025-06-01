import { News } from "../../models/news";
import { deleteImgInCloudinary } from "../../utils";

const deleteNews = async (req, res) => {
  const { id: newsId } = req.params;
  const { photos } = await News.findOne({ _id: newsId });

  for (const photo of photos) {
    deleteImgInCloudinary(photo);
  }

  const result = await News.findByIdAndDelete(newsId);

  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(204).json();
};

module.exports = deleteNews;
