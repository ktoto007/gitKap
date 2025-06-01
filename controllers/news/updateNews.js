const { News } = require("../../models/news");
const { deleteImgInCloudinary, uploadImgTocloud } = require("../../utils");

const updateNews = async (req, res) => {
  if (req.files?.length <= 1) {
    res.status(400).json("photos is required and must be more than one photo");
    return;
  }
  const { id: newsId } = req.params;
  const imgs = [...req.files];
  const newPhotos = [];
  const { photos } = await News.findOne({ _id: newsId });

  for (const photo of photos) {
    deleteImgInCloudinary(photo);
  }

  for (const img of imgs) {
    const { path, originalname, destination } = img;

    const filename = `${newsId}${originalname}`;

    const photo = await uploadImgTocloud(path, destination, filename);

    newPhotos.push(photo);
  }

  const updatedNews = await News.findByIdAndUpdate(
    newsId,
    { ...req.body, photos: newPhotos },
    {
      new: true,
    }
  );

  res.status(200).json(updatedNews);
};

module.exports = updateNews;
