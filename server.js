// REQUIRED MODULES
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// SET UP SERVER
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './app/public')));

require("./app/routing/htmlRoutes")(app);


// START APP
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
})