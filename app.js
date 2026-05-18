const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended : true}));
app.set("view engine", "ejs");

app.get("/", ( req, res) => {
    res.render("Home");
})

app.get("/Statistical", (req , res) =>{
    res.render("Statistical");
})

app.get("/Statistical/Mean", (req , res) =>{
    res.render("Statistical/Mean");
})

app.get("/Statistical/MeanDeviation", (req , res) =>{
    res.render("Statistical/MeanDeviation");
})

app.get("/Statistical/MeanStepDeviation", (req , res) =>{
    res.render("Statistical/MeanStepDeviation");
})

app.get("/Statistical/Median", (req , res) =>{
    res.render("Statistical/Median");
})

app.get("/Statistical/Mode", (req , res) => {
    res.render("Statistical/Mode")
})

app.get("/Statistical/StandardDeviation", (req , res) => {
    res.render("Statistical/StandardDeviation")
})

app.get("/Statistical/Co-Variance", (req ,res) => {
    res.render("Statistical/Co-Variance")
})

app.get("/Statistical/CoefficientOfVariation", (req , res) => {
    res.render("Statistical/CoefficientOfVariation")
})

app.get("/Statistical/KPS", (req , res) => {
    res.render("Statistical/KPS")
})

app.listen(3000, function(){
    console.log("Its running Bro");
})