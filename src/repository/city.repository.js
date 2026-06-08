
const {city : City} = require('../models')

// here this export means objectProperty : localVariableName

class CityRepository{
    async createCity({Name}){
    try {
        const createdcity = await City.create({
            Name: Name
        });

        return createdcity;
    } catch (error) {
        throw error;
    }
}
    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id : cityId
                }
            })
            return true;
        } catch (error) {
            throw(error);
        }
    }
    async updateCity(cityId, data){
        try {
            const updatedcity = await City.update({Name : data.Name} , {
                where:{
                    id : cityId
                }
            });
            return updatedcity;
        } catch (error) {
            throw(error);
        }
    }
    async getCity(cityId){
        try {
            // const city = await city.findByPk(cityId)
            const gotcity = await City.findOne({ 
                where:{
                    id:cityId
                }
             })
            return gotcity;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = CityRepository