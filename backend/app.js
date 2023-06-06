const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");

const app = express();
const cookiParser = require("cookie-parser");

//middleware
app.use(express.json());
app.use(cookiParser());


//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path : "backend/config/.env"
    })
}




//error handling
app.use(ErrorHandler)


module.exports = app ;