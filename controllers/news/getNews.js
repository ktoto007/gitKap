const { News } = require("../../models/news");
const { pagination } = require("../../utils");

const getNews = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;

  const { results, currentPage, totalPages } = await pagination(
    News,
    {},
    page,
    limit
  );

  res.status(200).json({
    news: results,
    currentPage,
    totalPages,
  });
};

module.exports = getNews;
