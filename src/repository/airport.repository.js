const { Airport } = require("../models");
const { Op } = require("sequelize");

// read all airports
// read all airports from a city
// search Airporta based on a query
/* 
        getAirport(id) based on cityId get all the airports it has

        getAllAirports()

        searchAirports(query)
*/

class AirportRepository {
  async getAllAirports() {
    try {
      const airports = await Airport.findAll();
      return airports;
    } catch (error) {
      console.log("Repository Error:", error);
      throw error;
    }
  }
  async getAirportById(id) {
    try {
      const airport = await Airport.findByPk(id);
      return airport;
    } catch (error) {
      console.log("Repository Error:", error);
      throw error;
    }
  }
  
  // below function supports /search/?cityid=5&query=del
  // supports /search/?cityid=5
  // supports /search/?query=del all three at once
  async searchAirports(filters){
    try {
        const customFilters={}
        if(filters.cityId){
            customFilters.cityId = filters.cityId
        }
        if(filters.name){
            customFilters.Name = {
                [Op.like] : `${filters.name}%`
            }
        }
        const airports = await Airport.findAll({
            where:customFilters
        })
        return airports;
    } catch (error) {
        console.log("Repository error: ", error);
        throw(error);
    }
  }
}

module.exports = AirportRepository;