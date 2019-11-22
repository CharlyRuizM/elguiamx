const joi = require('@hapi/joi');

const placeIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const placeNameSchema = joi.string().max(80);
const placeYearSchema = joi
  .number()
  .min(1888)
  .max(2077);
const placeCoverSchema = joi.string().uri();
const placeDescriptionSchema = joi.string().max(300);
const placeDurationSchema = joi
  .number()
  .min(1)
  .max(300);
const placeContentRatingSchema = joi.string().max(5);
const placeSourceSchema = joi.string().uri();
const placeTagsSchema = joi.array().items(joi.string().max(50));

const createPlaceSchema = {
  name: placeNameSchema.required(),
  year: placeYearSchema.required(),
  cover: placeCoverSchema.required(),
  description: placeDescriptionSchema.required(),
  duration: placeDurationSchema.required(),
  contentRating: placeContentRatingSchema.required(),
  source: placeSourceSchema.required(),
  tags: placeTagsSchema
};

const updatePlaceSchema = {
  name: placeNameSchema,
  year: placeYearSchema,
  cover: placeCoverSchema,
  description: placeDescriptionSchema,
  duration: placeDurationSchema,
  contentRating: placeContentRatingSchema,
  source: placeSourceSchema,
  tags: placeTagsSchema
};

module.exports = {
  placeIdSchema,
  createPlaceSchema,
  updatePlaceSchema
};
