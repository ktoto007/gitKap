const express = require("express");

const router = express.Router();

const { validateBody, autentificate } = require("../../middlewares");
const { schemas } = require("../../models/personalities");
const ctrl = require("../../controllers/personalities");

router.get("/:id", ctrl.getPersonalityById);

router.post(
  "/add",
  autentificate,
  validateBody(schemas.personalityValidationSchema),
  ctrl.addPersonalities
);

router.post(
  "/update/:id",
  autentificate,
  validateBody(schemas.personalityValidationSchema),
  ctrl.updatePersonalities
);

router.delete("/delete/:id", autentificate, ctrl.deletePersonalities);

module.exports = router;
