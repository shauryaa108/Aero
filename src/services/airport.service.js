const ApiError = require('../middlewares/apiError.middleware')
const AirportRepository = require('../repository/airport.repository')

class AirportService{
    constructor(){
        this.airportRepository = new AirportRepository()
    }
    // get all airport
    // get airports by city id
    // get airport by id

    async getAll(){
        const airports = await this.airportRepository.getAllAirports()
        return airports;
    }
    async getById(id){
        if(!id){
            throw new ApiError({
                statusCode:400,
                message:"Airport Id is required",
                success:false
            });
        }

        const airport = await this.airportRepository.getAirportById(id);
        if(!airport){
            throw new ApiError({
                statusCode:404,
                message:"Airport with id is not found",
                success:false
            })
        }
        return airport;
    }
    async getByFilter(filters){
        if(!filters || (!filters.cityId && !filters.name)){
            throw new ApiError({
                statusCode:400,
                message:"Parameters are required",
                success:false
            });
        }
        const airport = await this.airportRepository.searchAirports({cityId : filters.cityId , name: filters.name});
        return airport;
    }
}
module.exports = AirportService