const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/foodInput"
);

const foodSeed = [
  {
    "auth0_Id":"12345rutdhsf", 
    "meal":"Costco Hot", 
    "mealTime":"11:00pm", 
    "carbsAmt": "150"
  },
  {
    "auth0_Id":"23456754ersgtrewg", 
    "meal":"Ceasar Salad", 
    "mealTime":"9:00pm", 
    "carbsAmt": "250"
  },
  {
    "auth0_Id":"ebjgrejlgbrlsjgd54634", 
    "meal":"Cheeseburger", 
    "mealTime":"3:00am", 
    "carbsAmt": "460"
  },
  {
    "auth0_Id":"ebjgrejlgbrlsjgd54634", 
    "meal":"Twinkies", 
    "mealTime":"6:00am", 
    "carbsAmt": "700"
  }
];

db.foodInput
  .remove({})
  .then(() => db.foodInput.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
