const dotenv = require('dotenv');
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://rhythmgulati11:${process.env.PASSWORD}@cluster0.yuwvoas.mongodb.net/`).then(()=>console.log("Db connected")).catch(()=>console.log("db connection error"));

