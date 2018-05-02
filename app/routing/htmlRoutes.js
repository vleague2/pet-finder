// REQUIRED MODULES
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// SET UP SERVER
const app = express();
const PORT = process.env.PORT || 3000;

// ROUTES

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

app.get("/addpet", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/addpet.html"));
})

app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

app.get("/api/pets", (req, res) => {
    return res.json(pets);
})

app.get("/app/public/css/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/css/style.css"));
})

app.get("/app/public/images/cloudy-day.png", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/images/cloudy-day.png"))
})




// START APP
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
})