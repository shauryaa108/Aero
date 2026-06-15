const AirportService = require('../services/airport.service')
const ApiResponse = require('../middlewares/apiResponse.middleware');
const asyncHandler = require('../utils/asyncHandler.utils');
const ApiError = require('../middlewares/apiError.middleware');

const airportService = new AirportService()

// now i need four functions
// getAllAirports
// getAirportById
// getAirportByFilters

// airport/
const getAllAirports = asyncHandler(async(req,res)=>{
    const airports = await airportService.getAll()
    return res.status(200).json(
        new ApiResponse(
            200,
            airports,
            "Airports Fetch Success"
        )
    )
})

// airport/:id
const getAirportById = asyncHandler(async(req,res)=>{
    const airport = await airportService.getById(req.params.id)
    return res.status(200).json(
        new ApiResponse(
            200,
            airport,
            "Airport Fetch Success"
        )
    )
})


// airport/search/?cityId=&name=
const getAirportByFilters = asyncHandler(async(req,res)=>{
    const airports = await airportService.getByFilter(req.query)
    return res.status(200).json(
        new ApiResponse(
            200,
            airports,
            "Airports Fetch Success"
        )
    )
})

module.exports = {
    getAllAirports,
    getAirportById,
    getAirportByFilters
}