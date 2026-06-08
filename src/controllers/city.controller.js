const CityService = require('../services/city.service')

const cityService = new CityService()
// it will hvae all the functions executed by the router means we will hvae certain routes, those routes will hit these 
// functions and we will be having the output through these functions
// we only need to write the functions here as we don't need to add any class
// we can also make sure that there is no direct interaction with db so we remove the repository import

// router - /city/
const createCity = async (req,res)=>{
    try {
        const city = await cityService.create(req.body)
        return res.status(201).json({
            data : city,
            message : "City created successfully",
            success: true,
            err : {}
        })
    } catch (error) {
        console.log("couldn't create the city through controllers");
        return res.status(500).json({
            data:{},
            message : "City create unsuccessful",
            success: false,
            err : error
        })
    }
}

// router - /city/:id
const deleteCity = async (req,res)=>{
    try {
        const city = await cityService.delete(req.params.id)
        return res.status(201).json({
            data : city,
            message : "City deleted successfully",
            success: true,
            err : {}
        })
    } catch (error) {
        console.log("couldn't delete the city through controllers");
        return res.status(500).json({
            data:{},
            message : "City delete unsuccessful",
            success: false,
            err : error
        })
    }
}




// router - /city/:id
const updateCity = async (req,res)=>{
    try {
        const city = await cityService.update(req.params.id, req.body)
        return res.status(201).json({
            data : city,
            message : "City updated successfully",
            success: true,
            err : {}
        })
    } catch (error) {
        console.log("couldn't update the city through controllers");
        return res.status(500).json({
            data:{},
            message : "City update unsuccessful",
            success: false,
            err : error
        })
    }
}



// router - /city/:id
const getCity = async (req,res)=>{
    try {
        const city = await cityService.get(req.params.id)
        return res.status(201).json({
            data : city,
            message : "City fetched successfully",
            success: true,
            err : {}
        })
    } catch (error) {
        console.log("couldn't fetch the city through controllers");
        return res.status(500).json({
            data:{},
            message : "City fetch unsuccessful",
            success: false,
            err : error
        })
    }
}

module.exports = {
    getCity,
    updateCity,
    deleteCity,
    createCity
}