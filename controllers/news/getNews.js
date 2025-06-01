import { News } from "../../models/news";
const { pagination } = require("../../utils");

const getNews = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;

  const { result, currentPage, totalPages } = await pagination(
    News,
    {},
    page,
    limit
  );

  res.status(200).json({
    news: result,
    currentPage,
    totalPages,
  });
};

module.exports = getNews;
