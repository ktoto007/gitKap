const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const personalitiesSchema = new Schema(
  {
    scy_rank: {
      type: String,
      required: [true, "scy_rank is required"],
    },
    scy_rank_en: {
      type: String,
      required: [true, "scy_rank_en is required"],
    },
    scy_degree: {
      type: String,
      required: [true, "scy_degree is required"],
    },
    scy_degree_en: {
      type: String,
      required: [true, "scy_degree_en is required"],
    },
    scy_position: {
      type: String,
      required: [true, "scy_position is required"],
    },
    scy_position_en: {
      type: String,
      required: [true, "scy_position_en is required"],
    },
    links: {
      type: Array,
      required: [true, "links is required"],
    },
    cv: {
      type: String,
      required: [true, "cv is required"],
    },
    contact_place: {
      type: String,
      required: [true, "contact_place is required"],
    },
    contact_email: {
      type: String,
      required: [true, "contact_email is required"],
      match: emailRegexp,
    },
    general_info: {
      type: String,
      required: [true, "general_info is required"],
    },
    general_info_en: {
      type: String,
      required: [true, "general_info_en is required"],
    },
    scientific_activity: {
      type: String,
      required: [true, "scientific_activity is required"],
    },
    scientific_activity_en: {
      type: String,
      required: [true, "scientific_activity_en is required"],
    },
    teaching_work: {
      type: String,
      required: [true, "teaching_work is required"],
    },
    teaching_work_en: {
      type: String,
      required: [true, "teaching_work_en is required"],
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

personalitiesSchema.post("save", handleMongooseError);

const personalityValidationSchema = Joi.object({
  scy_rank: Joi.string().required(),
  scy_rank_en: Joi.string().required(),
  scy_degree: Joi.string().required(),
  scy_degree_en: Joi.string().required(),
  scy_position: Joi.string().required(),
  scy_position_en: Joi.string().required(),
  links: Joi.array().required(),
  cv: Joi.binary(),
  contact_place: Joi.string().required(),
  contact_email: Joi.string().pattern(emailRegexp).required(),
  general_info: Joi.string().required(),
  general_info_en: Joi.string().required(),
  scientific_activity: Joi.string().required(),
  scientific_activity_en: Joi.string().required(),
  teaching_work: Joi.string().required(),
  teaching_work_en: Joi.string().required(),
});

const schemas = { personalityValidationSchema };

const Personalities = model("personalities", personalitiesSchema);

module.exports = {
  Personalities,
  schemas,
};
