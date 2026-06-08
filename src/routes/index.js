const express = require('express')
const router = express.Router()
const cityrouter = require('./city.routes.js')

router.use('/city', cityrouter)

module.exports = router