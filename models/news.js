const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const newsSchema = new Schema(
  {
    short_description: {
      type: String,
      required: [true, "short_description is required"],
    },
    short_description_en: {
      type: String,
      required: [true, "short_description_en is required"],
    },
    longer_description: {
      type: String,
      required: [true, "longer_description is required"],
    },
    longer_description_en: {
      type: String,
      required: [true, "longer_description_en is required"],
    },
    photos: Array,
  },
  { versionKey: false, timestamps: true }
);

newsSchema.post("save", handleMongooseError);

const newsValidationSchema = Joi.object({
  short_description: Joi.string().required(),
  short_description_en: Joi.string().required(),
  longer_description: Joi.string().required(),
  longer_description_en: Joi.string().required(),
  photos: Joi.binary(),
});

const schemas = { newsValidationSchema };

const News = model("news", newsSchema);

module.exports = {
  News,
  schemas,
};
