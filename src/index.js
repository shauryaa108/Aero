const express = require("express")
const {PORT} = require('./config/envconfig.config.js')
const router = require('../src/routes/index.js')

const SetupServer = async ()=>{
    const app = express()
    app.listen(process.env.PORT , ()=>{
        console.log("app is listening on port ",PORT)
    })
    
}

ap.use('/', router)

SetupServer()