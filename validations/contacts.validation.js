const Joi = require('joi');

const addContacts = {
  body: Joi.object().keys({
    firstName: Joi.string().required().min(3),
    lastName: Joi.string().required().min(3),
    actionAttribute: Joi.string().required(),
    type: Joi.string().required(),
    email: Joi.string(),
    fileId: Joi.number().required(),
    isEntity: Joi.boolean(),
    middleName: Joi.string(),
    primaryPhoneNumber: Joi.string(),
    suffix: Joi.string(),
    primaryAddress: Joi.object().keys({
      county: Joi.string(),
      id: Joi.string(),
      postalCode: Joi.string(),
      state: Joi.string(),
      streetAddress: Joi.string(),
      streetName: Joi.string(),
      streetNumber: Joi.string(),
      unitNumber: Joi.string()
    })
  })
};

module.exports = {
  addContacts
};
