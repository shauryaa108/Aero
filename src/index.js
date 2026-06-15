const express = require("express")
const {PORT} = require('./config/envconfig.config.js')
const router = require('../src/routes/index.js')
const {Airport} = require('./models')
const {city} = require('./models')
const {Flight} = require('./models')
const db = require('./models')
const errorHandler = require('./middlewares/errorHandler.middleware.js')
const SetupServer = async ()=>{
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(errorHandler)
    app.use('/', router)
    app.listen(PORT , async ()=>{
        console.log("app is listening on port ",PORT)
        // const data = await Airport.findAll({
        //     where:{
        //         cityId:4
        //     },
        //     include:[
        //         {model:city}
        //     ]
        // })
        // console.log(data)
        
        // another method is to use the sequelize sync for once and then find the airports using cities like below

        // db.sequelize.sync({alter:true})
        // const citydata = await city.findOne({
        //     where:{
        //         id:4
        //     }
        // })
        // const airportsdata = await citydata.getAirports() // this function was created by sequelize for us using the association we defined
        // console.log(airportsdata)

    })
}


SetupServer()