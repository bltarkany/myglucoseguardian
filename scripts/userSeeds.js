const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3"
);

const userSeed = [
  {
    "auth0_Id":"12345rutdhsf", 
    "first_name":"Spongebob", 
    "last_name":"Squarepants", 
    "email": "bubbles@krustykrab.com", 
    "gender":"male", 
    "dob": "11/26/1999",
    "height": "10", 
    "weight": "35", 
    "diabetes_type": "1"
  },
  {
    "auth0_Id":"23456754ersgtrewg", 
    "first_name":"Post", 
    "last_name":"Malone", 
    "email": "pmcircles@gmail.com", 
    "gender":"male", 
    "dob": "8/9/1800", 
    "height": "190", 
    "weight": "500", 
    "diabetes_type": "2"
  },
  {
    "auth0_Id":"ebjgrejlgbrlsjgd54634", 
    "first_name":"Speed", 
    "last_name":"Racer", 
    "email": "2fast@mach5.com", 
    "gender":"male", 
    "dob": "12/25/1700", 
    "height": "160", 
    "weight": "150", 
    "diabetes_type": "1"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
