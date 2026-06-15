const express = require('express')
const router = express.Router()
const cityRouter = require('./city.routes.js')
const airportRouter = require('./airport.routes.js')

router.use('/city', cityRouter)
router.use('/airport', airportRouter)

module.exports = router