const CityRepository = require('../repository/city.repository.js')

class CityService{
    
    constructor(){
        this.cityRepository = new CityRepository(); // created a object
    }
    async create(data){
        try {
            const createdCity = await this.cityRepository.createCity(data);
            return createdCity;
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw(error);
        }
    }
    async delete(cityId){
        try {
            const deletedCityResponse = await this.cityRepository.deleteCity(cityId);
            return deletedCityResponse;
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw(error);
        }
    }
    async update(cityId,data){
        try {
            const updatedCityResponse = await this.cityRepository.updateCity(cityId, data);
            return updatedCityResponse;
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw(error);
        }
    }
    async get(cityId){
        try {
            const gotCityResponse = await this.cityRepository.getCity(cityId);
            return gotCityResponse;
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw(error);
        }
    }
    async getAll(filter){
        try {
            const gotCityResponse = await this.cityRepository.getCities(filter);
            return gotCityResponse;
        } catch (error) {
            console.log("Something went wrong in service layer")
            throw(error);
        }
    }
}

module.exports = CityService;