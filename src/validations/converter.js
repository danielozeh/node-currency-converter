const Joi = require('joi')

module.exports = {

    convert: Joi.object({
        from_currency: Joi.string().required(),
        to_currency: Joi.string().required(),
        amount: Joi.number().required()
    }),
}
