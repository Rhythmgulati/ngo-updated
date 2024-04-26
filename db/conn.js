const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/aadidevngo").then(()=>console.log("Db connected")).catch(()=>console.log("db connection error"));

