const express = require('express')

const router = express.Router()
const api_version = '/v.1'

const converterRoutes = require('./api/converter')

router.get('/', (req, res) => {
    return res.send('API is Running...')
})

router.use(api_version + '/converter', converterRoutes)

module.exports = router
