// REQUIRED MODULES
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pets = require('../data/pets');

module.exports = function(app) {
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

    app.post('/api/survey', (req, res) => {
        
        let user = [
            parseInt(req.body.scores[0]), parseInt(req.body.scores[1]), parseInt(req.body.scores[2]), parseInt(req.body.scores[3]), parseInt(req.body.scores[4]), parseInt(req.body.scores[5]), parseInt(req.body.scores[6]), parseInt(req.body.scores[7]), parseInt(req.body.scores[8]), parseInt(req.body.scores[9])
        ]
        console.log(user);

        let userName = req.body.name;

        // initialize userTotal variable so we can add to it
        let userTotal = 0;

        // loop through all the user's answers and add each number to the total
        user.forEach(score => {
            userTotal += score;
        });

        console.log(userTotal);

        // create an empty array to hold the differences between the user's score and the pet's score
        let petScoreDiff = [];

        // loop through the pets array
        pets.forEach(pet => {

            // calculate the difference between their total and the user total
            let diff = pet.total - userTotal;

            // make sure the number is positive
            if (diff < 0) {
                diff = Math.abs(diff);

                // push to the array
                petScoreDiff.push(diff);
            }

            // push to the array
            else {
                petScoreDiff.push(diff);
            }
        })

        console.log(petScoreDiff);


        // set a number that's outrageously high. we'll change this in the next loop to whatever number is lowest in the difference array
        let matchNum = 100;

        // initialize variable that will tell us what the index is of the final pet match
        let matchIndex;

        // loop through the difference array
        petScoreDiff.forEach(score => {
            // if the score is less than the matchNum,
            if (score < matchNum) {

                // change the matchNum to the score. this will ensure we have the lowest difference
                matchNum = score;

                // pull out the index of the array item so we can then identify the correct pet
                matchIndex = petScoreDiff.indexOf(score);
            }
        })

        console.log(matchNum);
        console.log(matchIndex);
        console.log(pets[matchIndex]);

        res.send(pets[matchIndex]);

        // let modal = document.getElementById("modal");

        // modal.appendChild(pets[matchIndex]);

        // res.end();
    })

}