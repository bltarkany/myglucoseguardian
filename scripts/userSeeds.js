const mongoose = require("mongoose");
const db = require("../models");
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3"
);

const userSeed = [
  {
    "auth0__id":"12345rutdhsf", 
    "first_name":"Spongebob", 
    "last_name":"Squarepants", 
    "email": "bubbles@krustykrab.com", 
    "gender":"male", 
    "dob": "11/26/1999",
    "height": "10", 
    "weight": "35", 
    "diabetes_type": "1",
    "glucoseCharts": ObjectId("000000000000000000000001"),
    "foodLog": ObjectId("000000000000000000000001")
  },
  {
    "auth0__id":"23456754ersgtrewg", 
    "first_name":"Post", 
    "last_name":"Malone", 
    "email": "pmcircles@gmail.com", 
    "gender":"male", 
    "dob": "8/9/1800", 
    "height": "190", 
    "weight": "500", 
    "diabetes_type": "2",
    "glucoseCharts": ObjectId("000000000000000000000002")
  },
  {
    "auth0__id":"ebjgrejlgbrlsjgd54634", 
    "first_name":"Speed", 
    "last_name":"Racer", 
    "email": "2fast@mach5.com", 
    "gender":"male", 
    "dob": "12/25/1700", 
    "height": "160", 
    "weight": "150", 
    "diabetes_type": "1",
    "foodLog": ObjectId("000000000000000000000002")
  }
];

const foodLogSeed = [
  {
  "_id": ObjectId("000000000000000000000001"),
  GlucoseLogs: [ObjectId("000000000000000000000001"), ObjectId("000000000000000000000003")]
  }, 
  {
  "_id": ObjectId("000000000000000000000002"),
  GlucoseLogs: [ObjectId("000000000000000000000002"), ObjectId("000000000000000000000004")]
  }
];

const foodSeed = [
  { 
    "_id": ObjectId("000000000000000000000001"), 
    "meal":"Costco Hot", 
    "mealTime":"11:00pm", 
    "carbsAmt": "150"
  },
  {
    "_id": ObjectId("000000000000000000000002"),
    "meal":"Ceasar Salad", 
    "mealTime":"9:00pm", 
    "carbsAmt": "250"
  },
  {
    "_id": ObjectId("000000000000000000000003"),
    "meal":"Cheeseburger", 
    "mealTime":"3:00am", 
    "carbsAmt": "460"
  },
  {
    "_id": ObjectId("000000000000000000000004"),
    "meal":"Twinkies", 
    "mealTime":"6:00am", 
    "carbsAmt": "700"
  }
];

const glucoseChartSeed = [
  {
  "_id": ObjectId("000000000000000000000001"),
  GlucoseLogs: [ObjectId("000000000000000000000001"), ObjectId("000000000000000000000002"), ObjectId("000000000000000000000004")]
  }, 
  {
  "_id": ObjectId("000000000000000000000002"),
  GlucoseLogs: [ObjectId("000000000000000000000003"), ObjectId("000000000000000000000005")]
  }
];

const glucoseSeed = [
  {
  "_id": ObjectId("000000000000000000000001"), 
  "glucoseLevel":"250", 
  "timeCollected":"6:00"
  },
  {
  "_id": ObjectId("000000000000000000000002"), 
  "glucoseLevel":"225", 
  "timeCollected":"11:00"
  },
  {
  "_id": ObjectId("000000000000000000000003"),
  "glucoseLevel":"150", 
  "timeCollected":"13:00"
  },
  {
  "_id": ObjectId("000000000000000000000004"),
  "glucoseLevel":"500", 
  "timeCollected":"18:00"
  },
  {
  "_id": ObjectId("000000000000000000000005"),
  "glucoseLevel":"250", 
  "timeCollected":"22:00"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(() => db.foodLog.collection.insertMany(foodLogSeed))
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(() => db.glucoseChart.collection.insertMany(glucoseChartSeed))
  .then(() => db.Glucose.collection.insertMany(glucoseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
