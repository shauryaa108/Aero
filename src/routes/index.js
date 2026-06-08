const express = require('express')
const router = express.Router()
const cityRouter = require('./city.routes.js')

router.use('/city', cityRouter)

module.exports = router