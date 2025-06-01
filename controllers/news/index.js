const { ctrlWrapper } = require("../../helpers");
const getNews = require("./getNews");
const getNewsById = require("./getNewsById");
const addNews = require("./addNews");
const updateNews = require("./updateNews");
const deleteNews = require("./deleteNews");

module.exports = {
  getNews: ctrlWrapper(getNews),
  getNewsById: ctrlWrapper(getNewsById),
  addNews: ctrlWrapper(addNews),
  updateNews: ctrlWrapper(updateNews),
  deleteNews: ctrlWrapper(deleteNews),
};
