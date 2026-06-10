const express = require('express')
const router = express.Router()
const {getCity,updateCity,deleteCity,createCity,getAllCities} = require('../controllers/city.controller')

router.get('/:id', getCity) // working
router.post('/', createCity) // working
router.patch('/:id', updateCity) // working
router.delete('/:id', deleteCity) // working
router.get('/', getAllCities) // working

module.exports = router