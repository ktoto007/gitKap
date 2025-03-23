const { Personalities } = require("../../models/personalities");

const addPersonalities = async (req, res) => {
  
  const {  id: personalitiesId } = req.params;

  const updatedPersonalities = await Personalities.findByIdAndUpdate(
    personalitiesId,
    { ...req.body },
    {
      new: true,
    }
  );

  res.status(200).json(updatedPersonalities);
};

module.exports = addPersonalities;
