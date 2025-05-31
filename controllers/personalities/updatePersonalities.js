const { Personalities } = require("../../models/personalities");
const { deleteImgInCloudinary, uploadImgTocloud } = require("../../utils");

const updatePersonalities = async (req, res) => {
  if (!req.file) {
    res.status(400).json("photo is required");
    return;
  }

  const { id: personalitiesId } = req.params;

  const { photo } = await Personalities.findOne({ _id: personalitiesId });

  deleteImgInCloudinary(photo);

  const { path, originalname, destination } = req.file;

  const filename = `${personalitiesId}${originalname}`;

  const newPhoto = await uploadImgTocloud(path, destination, filename);

  const updatedPersonalities = await Personalities.findByIdAndUpdate(
    personalitiesId,
    { ...req.body, photo: newPhoto },
    {
      new: true,
    }
  );

  res.status(200).json(updatedPersonalities);
};

module.exports = updatePersonalities;
