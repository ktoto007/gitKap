const { Personalities } = require("../../models/personalities");
const { pagination } = require("../../utils");

const getAllPersonalities = async (req, res) => {
    const {  page = 1, limit = 12 } = req.query;

    const { results, currentPage, totalPages } = await pagination(
      Personalities,
      {},
      page,
      limit
    );

    res.status(200).json({
      personalities: results,
      currentPage,
      totalPages,
    });
};

module.exports = getAllPersonalities