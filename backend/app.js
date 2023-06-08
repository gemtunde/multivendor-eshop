const express = require("express");
const ErrorHandler = require("./middlewares/error");

const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
//const fileUpload = require("express-fileupload");
const cors = require("cors");
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({extended : true, limits:"50mb"}));
//app.use(fileUpload({useTempFiles : true}));


//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path : "backend/config/.env"
    })
}

//import routes
const user = require("./controller/user");
app.use("/api/user", user);


//error handling
app.use(ErrorHandler)


module.exports = app ;