const express = require("express")
const {PORT} = require('./config/envconfig.config.js')

const SetupServer = async ()=>{
    const app = express()
    app.listen(process.env.PORT , ()=>{
        console.log("app is listening on port ",PORT)
    })
    
}

SetupServer()