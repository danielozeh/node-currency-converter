const express = require('express')
const router = express.Router()

const currencyController = require('../../controllers')
const validate = require('../../middlewares/validate')
const { convert } = require('../../validations/converter')

router.post('/', validate(convert), currencyController.convert)

module.exports = router
