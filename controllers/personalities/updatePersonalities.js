const { Personalities } = require("../../models/personalities");

const addPersonalities = async (req, res) => {
  const { personalitiesId } = req.params;

  const updatedPersonalities = await Personalities.findByIdAndUpdate(
    personalitiesId,
    { ...req.body },
    {
      new: true,
    }
  );

  res.status(201).json({ ...updatedPersonalities });
};

module.exports = addPersonalities;
