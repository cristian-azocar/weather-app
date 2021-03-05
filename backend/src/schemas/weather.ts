import Joi, { Schema } from '@hapi/joi';

const schema: Schema = Joi.object({
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

export default schema;
