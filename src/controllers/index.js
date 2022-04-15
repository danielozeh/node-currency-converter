const moment = require('moment')
const bcrypt = require('bcrypt')
const responseHandler = require('../utils/response')
const CurrencyConverter = require('../utils/converter')


/**
 * 
 * @body {from_currency, to_currency, amount} req 
 * @returns 
 * @method POST
 * @author Daniel Ozeh hello@danielozeh.com.ng
 */
exports.convert = async(req, res) => {
    let {from_currency, to_currency, amount} = req.body
    convertedAmount = amount
    if(from_currency == "NGN") {
        convertedAmount = amount * 0.9800
    }
    if(to_currency === "NGN") {
        convertedAmount = amount * 1.0200
    }

    try {
        let currencyConverter = new CurrencyConverter({from: from_currency, to: to_currency, amount: convertedAmount})
        let convertedTo = await currencyConverter.convert();

        if(convertedTo) {
            return responseHandler.sendSuccess(res, {
                message: 'Currency Conversion',
                data: {from_currency, to_currency, amount, convertedTo}
            })
        }
        return responseHandler.sendError(res, {
            message: 'An Error Occured.'
        })
    } catch(e) {
        return responseHandler.internalServerError(res, e.message)
    }
}

exports.getAllCurrencies = async(req, res) => {

    try {
        let currencyConverter = new CurrencyConverter()

        return responseHandler.sendSuccess(res, {
            message: 'All Currencies',
            data: currencyConverter
        })
    } catch(e) {
        return responseHandler.internalServerError(res, e.message)
    }
}