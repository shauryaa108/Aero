const FlightService = require('../services/flight.service');
const ApiResponse = require('../middlewares/apiResponse.middleware');
const asyncHandler = require('../utils/asyncHandler.utils');

const flightservice = new FlightService();