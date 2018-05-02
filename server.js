// REQUIRED MODULES
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// SET UP SERVER
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/public'));

// START APP
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
})