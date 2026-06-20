const { Op } = require("sequelize");
const { Flight, Airport } = require("../models");


class flightRepository{
    async getAll(){
        try {
            const flights = await Flight.findAll()
            return flights;
        } catch (error) {
            console.log("Error in fetching flights")
            throw error
        }
    }
    async getAllFromOneCity(cityId){
        try {
            const airports = await Airport.findAll({
                where:{
                    cityId : cityId
                }
            })
            const airportIds = airports.map(airport=>airport.id)
            const flights = await Flight.findAll({
                where:{
                    departureAirportId : {
                        [Op.in] : airportIds
                    }
                }
            })
            return flights;
        } catch (error) {
            console.log("Error in fetching flights from this city")
            throw error
        }
    }
    async getAllFromOneCityToAnother(destinationId, departureId){
        try {
            const destAirports = await Airport.findAll({
                where:{
                    cityId : destinationId
                }
            })
            const destAirportIds = destAirports.map(airport=>airport.id)
            const deptAirports = await Airport.findAll({
                where:{
                    cityId : departureId
                }
            })
            const deptAirportIds = deptAirports.map(airport=>airport.id)
            const flights = await Flight.findAll({
                where:{
                    departureAirportId : {
                        [Op.in] : deptAirportIds
                    },
                    destinationAirportId:{
                        [Op.in] : destAirportIds
                    }
                    
                }
            })
            return flights;
        } catch (error) {
            console.log("Error in fetching flights from this city")
            throw error
        }
    }
    async getFlightOnADate(departureDate){
        try {
            const flights = await Flight.findAll({
                where:{
                    departure:{
                        [Op.like] : `${departureDate}%`
                    }
                }
            })
            return flights;
        } catch (error) {
            console.log("Can't fetch the flights on this date")
            throw error
        }
    }
    async getFlightOnADateFromOneCity(departureDate, departureCityId){
        try {
            const airports = await Airport.findAll({
                where:{
                    cityId : departureCityId
                }
            })
            const airportIds = airports.map(airport=>airport.id)
            const flights = await Flight.findAll({
                where:{
                    departure:{
                        [Op.like] : `${departureDate}%`
                    },
                    departureAirportId:{
                        [Op.in] : airportIds
                    }
                }
            })
            return flights;
        } catch (error) {
            console.log("Can't fetch the flights on this date")
            throw error
        }
    }
    async getFlightOnADateFromOneCityToAnother(departureDate, departureCityId, destinationCityId){
        try {
            const DeptAirports = await Airport.findAll({
                where:{
                    cityId : departureCityId
                }
            })
            const DeptAirportIds = DeptAirports.map(airport=>airport.id)

            const DestAirports = await Airport.findAll({
                where:{
                    cityId : destinationCityId
                }
            })
            const DestAirportIds = DestAirports.map(airport=>airport.id)
            const flights = await Flight.findAll({
                where:{
                    departure:{
                        [Op.like] : `${departureDate}%`
                    },
                    departureAirportId:{
                        [Op.in] : DeptAirportIds
                    },
                    destinationAirportId:{
                        [Op.in] : DestAirportIds
                    },
                }
            })
            return flights;
        } catch (error) {
            console.log("Can't fetch the flights on this date")
            throw error
        }
    }
    async getFlightWithPrice(price){
        try {
            const flights = await Flight.findAll({
                where:{
                    price:{
                        [Op.lte] : price
                    }
                }
            })
            return flights;
        } catch (error) {
            console.log("Can't fetch the flights with this price")
            throw error
        }
    }
}

module.exports = flightRepository