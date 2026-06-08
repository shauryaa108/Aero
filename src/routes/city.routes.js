const express = require('express')
const router = express.Router()
const {getCity,updateCity,deleteCity,createCity} = require('../controllers/city.controller')

router.get('/:id', getCity)
router.post('/', createCity)
router.patch('/:id', updateCity)
router.delete('/:id', deleteCity)

module.exports = router