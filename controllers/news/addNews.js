const { News } = require("../../models/news");
const { uploadImgTocloud } = require("../../utils");

const addNews = async (req, res) => {
  if (req.files?.length <= 1) {
    res.status(400).json("photos is required");
    return;
  }
  const imgs = [...req.files];
  const photos = [];

  const newNews = await News.create({
    ...req.body,
  });

  for (const img of imgs) {
    const { path, originalname, destination } = img;

    const filename = `${newNews._id}${originalname}`;

    const photo = await uploadImgTocloud(path, destination, filename);

    photos.push(photo);
  }

  const newNewsWithPhotos = await News.findByIdAndUpdate(
    newNews._id,
    { photos },
    {
      new: true,
    }
  );

  res.status(201).json(newNewsWithPhotos);
};

module.exports = addNews;
