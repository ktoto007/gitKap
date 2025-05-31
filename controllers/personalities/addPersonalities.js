const { Personalities } = require("../../models/personalities");
const { uploadImgTocloud } = require("../../utils");

const addPersonalities = async (req, res) => {
  if (!req.file) {
    res.status(400).json("photo is required");
    return;
  }

  const newPersonalities = await Personalities.create({
    ...req.body,
  });

  const { path, originalname, destination } = req.file;

  const filename = `${newPersonalities._id}${originalname}`;

  const photo = await uploadImgTocloud(path, destination, filename);

  const newPersonalitiesWithPhoto = await Personalities.findByIdAndUpdate(
    newPersonalities._id,
    { photo },
    {
      new: true,
    }
  );

  res.status(201).json(newPersonalitiesWithPhoto);
};

module.exports = addPersonalities;
