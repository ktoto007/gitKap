const bcrypt = require("bcrypt");
const { User } = require("../../models/user");

const { HttpError } = require("../../helpers");

const register = async (req, res) => {
  const body = req.body;

  const { login, password } = body;
  const user = await User.findOne({ login });
  if (user) {
    throw HttpError(409, "login already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...body, password: hashPassword });

  res.status(201).json({ login: newUser.login });
};

module.exports = register;
