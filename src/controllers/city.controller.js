const CityService = require('../services/city.service');
const ApiResponse = require('../middlewares/apiResponse.middleware');
const asyncHandler = require('../utils/asyncHandler.utils');

const cityService = new CityService();

// POST /city
const createCity = asyncHandler(async (req, res) => {
    const city = await cityService.create(req.body);

    return res.status(201).json(
        new ApiResponse(
            201,
            city,
            "City created successfully"
        )
    );
});

// DELETE /city/:id
const deleteCity = asyncHandler(async (req, res) => {
    const city = await cityService.delete(req.params.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            city,
            "City deleted successfully"
        )
    );
});

// PATCH /city/:id
const updateCity = asyncHandler(async (req, res) => {
    const city = await cityService.update(
        req.params.id,
        req.body
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            city,
            "City updated successfully"
        )
    );
});

// GET /city/:id
const getCity = asyncHandler(async (req, res) => {
    const city = await cityService.get(req.params.id);

    return res.status(200).json(
        new ApiResponse(
            200,
            city,
            "City fetched successfully"
        )
    );
});

// GET /cities
const getAllCities = asyncHandler(async (req, res) => {
    const cities = await cityService.getAll(req.query);

    return res.status(200).json(
        new ApiResponse(
            200,
            cities,
            "Cities fetched successfully"
        )
    );
});

module.exports = {
    getCity,
    updateCity,
    deleteCity,
    createCity,
    getAllCities
};