const getCurrent = async (req, res) => {
  const { login, subscription } = req.user;
  res.json({ login, subscription });
};

module.exports = getCurrent;
