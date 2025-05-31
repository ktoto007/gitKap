const express = require("express");

const router = express.Router();

const { validateBody, autentificate, upload } = require("../../middlewares");
const { schemas } = require("../../models/personalities");
const ctrl = require("../../controllers/personalities");

router.get("/", ctrl.getAllPersonalities);

router.get("/:id", ctrl.getPersonalityById);

router.post(
  "/add",
  autentificate,
  upload.single("photo"),
  validateBody(schemas.personalityValidationSchema),
  ctrl.addPersonalities
);

router.post(
  "/update/:id",
  autentificate,
  upload.single("photo"),
  validateBody(schemas.personalityValidationSchema),
  ctrl.updatePersonalities
);

router.delete("/delete/:id", autentificate, ctrl.deletePersonalities);

module.exports = router;
