require("./db/conn");
const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = process.env.PORT || 3000 
const path = require("path");
const staticpath = path.join(__dirname,"/public");
const templatepath = path.join(__dirname,"/templates/views");
const partialpath = path.join(__dirname,"/templates/partials");
app.use(express.static(staticpath));

app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);





app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/aboutus",(req,res)=>{
    res.render("aboutus")
})
app.get("/ourwork",(req,res)=>{
    res.render("ourwork")
})
app.get("/contactus",(req,res)=>{
    res.render("contactus")
})
app.get("/ourservices",(req,res)=>{
    res.render("ourservices")
})
app.get("/mediacenter",(req,res)=>{
    res.render("mediacenter")
})



app.listen(PORT,(req,res)=>{
    console.log(`Listening to port ${PORT}`);
});