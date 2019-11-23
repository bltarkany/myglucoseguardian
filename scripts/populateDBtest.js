const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/project3"
);

console.log("---------- POPULATING ----------");
db.User
    .find({})
    .populate({
        path: 'foodLog',
        populate: {
            path: 'foodEntry'
        }
    })
    .populate({
        path: "glucoseChart",
        populate: {
            path: "glucoseEntry"
        }
    })
    .exec(function (err, res) {
        if (err) throw err;
        console.log("MAIN RETURN: ", res); 
        res.forEach(content => {	
            let keys = Object.keys(content.toJSON());	
            keys.forEach(i => {	
                console.log(`${i} : ${content[i]}`);	
            })	
        });	
        process.exit(0);	
    }); 