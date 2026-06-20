const ApiError = require('../middlewares/apiError.middleware')
const flightRepository = require('../repository/flight.repository')

class FlightService{
    constructor(){
        this.flightRepository = new flightRepository()
    }
    // get all flights
    // get flights by 
    async getAll(){
        const flights = await this.flightRepository.getAll();
        return flights;
    }
    async getAllFromOneCity(cityId){
        if(!cityId){
            throw new ApiError({
                statusCode:400,
                message:"City Id is required",
                success:false
            })
        }
        const flights = await this.flightRepository.getAllFromOneCity(cityId);
        return flights;
    }
    async getAllFromOneCityToAnother(destinationId, departureId){
        if(!destinationId || !departureId){
            throw new ApiError({
                statusCode:404,
                message:"Both departure and destination Info is required",
                success:false
            })
        }
        const flights = await this.flightRepository.getAllFromOneCityToAnother(destinationId, departureId);
        return flights;
    }
    async getFlightOnADate(departureDate){
        if(!departureDate){
            throw new ApiError({
                statusCode:400,
                message:"Need the departure date to process",
                success:false
            })
        }
        const flights = await this.flightRepository.getFlightOnADate(departureDate);
        return flights;
    }
    async getFlightOnADateFromOneCity(departureDate,departureCityId){
        if(!departureDate){
            throw new ApiError({
                statusCode:400,
                message:"Need the departure Date to Proceed",
                success:false
            })
        }
        if(!departureCityId){
            throw new ApiError({
                statusCode:400,
                message:"Need the departure City Information to Proceed",
                success:false
            })
        }
        const flights = await this.flightRepository.getFlightOnADateFromOneCity(departureDate,departureCityId);
        return flights;
    }
    async getFlightOnADateFromOneCityToAnother(departureDate,departureCityId,destinationCityId){
        if(!departureDate){
            throw new ApiError({
                statusCode:400,
                message:"Need the departure Date to Proceed",
                success:false
            })
        }
        if(!departureCityId){
            throw new ApiError({
                statusCode:400,
                message:"Need the departure City Information to Proceed",
                success:false
            })
        }
        if(!destinationCityId){
            throw new ApiError({
                statusCode:400,
                message:"Need the destination City Information to Proceed",
                success:false
            })
        }
        const flights = await this.flightRepository.getFlightOnADateFromOneCityToAnother(departureDate,departureCityId,destinationCityId);
        return flights;
    }
    async getFlightWithPrice(price){
        if(!price){
            throw new ApiError({
                statusCode:400,
                message:"Enter The Price cap",
                success:false
            })
        }
        const flights = await this.flightRepository.getFlightWithPrice(price);
        return flights;
    }
}

module.exports = FlightService