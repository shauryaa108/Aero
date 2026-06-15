const express = require('express')
const router = express.Router()
const {getAllAirports,getAirportById,getAirportByFilters} = require('../controllers/airport.controller')

router.get('/', getAllAirports)
router.get('/search', getAirportByFilters) 
router.get('/:id', getAirportById) 

module.exports = router