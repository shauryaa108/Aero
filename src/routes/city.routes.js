const express = require('express')
const router = express.Router()
const {getCity,updateCity,deleteCity,createCity,getAllCities} = require('../controllers/city.controller')

router.get('city/:id', getCity) // working
router.post('city/', createCity) // working
router.patch('city/:id', updateCity) // working
router.delete('city/:id', deleteCity) // working
router.get('city/', getAllCities) // working

module.exports = router