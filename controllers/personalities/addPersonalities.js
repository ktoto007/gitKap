const { Personalities } = require("../../models/personalities");

const addPersonalities = async (req, res) => {
  const newPersonalities = await Personalities.create({
    ...req.body,
  });

  res.status(201).json(newPersonalities );
};

module.exports = addPersonalities;
