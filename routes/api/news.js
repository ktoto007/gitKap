const express = require("express");

const router = express.Router();

const { validateBody, autentificate, upload } = require("../../middlewares");
const { schemas } = require("../../models/news");
const ctrl = require("../../controllers/news");

router.get("/", ctrl.getNews);

router.get("/:id", ctrl.getNewsById);

router.post(
  "/add",
  autentificate,
  upload.array("photos", 10),
  validateBody(schemas.newsValidationSchema),
  ctrl.addNews
);

router.post(
  "/update/:id",
  autentificate,
  upload.array("photos", 10),
  validateBody(schemas.newsValidationSchema),
  ctrl.updateNews
);

router.delete("/delete/:id", autentificate, ctrl.deleteNews);

module.exports = router;
