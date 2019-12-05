const mongoose = require("mongoose");
const db = require("../models");
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3"
);

const userSeed = [
  {
    "auth0__id":"5dce30121735bc0d420a4b42", 
    "first_name":"Spongebob", 
    "last_name":"Squarepants", 
    "email": "bubbles@krustykrab.com", 
    "gender":"male", 
    "dob": "11/26/1999",
    "height": "10", 
    "weight": "35", 
    "diabetes_type": "1",
    "glucoseChart": ObjectId("5dce30121735bc0d420a4b42"),
    "foodLog": ObjectId("5dce30121735bc0d420a4b42")
  },
  {
    "auth0__id":"5dce20141735bc0d420a4c17", 
    "first_name":"Post", 
    "last_name":"Malone", 
    "email": "pmcircles@gmail.com", 
    "gender":"male", 
    "dob": "8/9/1800", 
    "height": "190", 
    "weight": "500", 
    "diabetes_type": "2",
    "glucoseChart": ObjectId("5dce20141735bc0d420a4c17")
  },
  {
    "auth0__id":"2dce301277a3bc0d170a4af1", 
    "first_name":"Speed", 
    "last_name":"Racer", 
    "email": "2fast@mach5.com", 
    "gender":"male", 
    "dob": "12/25/1700", 
    "height": "160", 
    "weight": "150", 
    "diabetes_type": "1",
    "foodLog": ObjectId("2dce301277a3bc0d170a4af1")
  }
];

const foodLogSeed = [
  {
  "_id": ObjectId("5dce30121735bc0d420a4b42"),
  foodEntry: [ObjectId("000000000000000000000001"), ObjectId("000000000000000000000003")]
  }, 
  {
  "_id": ObjectId("2dce301277a3bc0d170a4af1"),
  foodEntry: [ObjectId("000000000000000000000002"), ObjectId("000000000000000000000004")]
  }
];

const foodSeed = [
  { 
    "_id": ObjectId("000000000000000000000001"), 
    "meal":"Costco Hotdog",
    "mealTime":"Lunch",
    "calories":552,
    "fats":32,
    "carbs":46,
    "sugar":11,
    "dietFiber":35,
    "proteins":20,
    "auth0__id": "5dce30121735bc0d420a4b42"
  },
  {
    "_id": ObjectId("000000000000000000000002"),
    "meal":"Gatorade",
    "mealTime":"Lunch",
    "calories":80,
    "fats":0,
    "carbs":21,
    "sugar":21,
    "dietFiber":21,
    "proteins":0,
    "auth0__id": "2dce301277a3bc0d170a4af1"
  },
  {
    "_id": ObjectId("000000000000000000000003"),
    "meal":"Twinkies",
    "mealTime":"Snack",
    "calories":270,
    "fats":9,
    "carbs":46,
    "sugar":33,
    "dietFiber":0,
    "proteins":2,
    "auth0__id": "5dce30121735bc0d420a4b42"
  },
  {
    "_id": ObjectId("000000000000000000000004"),
    "meal":"mac and cheese",
    "mealTime":"breakfast",
    "calories":108,
    "fats":4.3,
    "carbs":14.6,
    "sugar":0,
    "dietFiber":2,
    "proteins":3,
    "auth0__id": "2dce301277a3bc0d170a4af1"
  }
];

const glucoseCharteed = [
  {
  "_id": ObjectId("5dce30121735bc0d420a4b42"),
  glucoseEntry: [ObjectId("000000000000000000000001"), ObjectId("000000000000000000000002"), ObjectId("000000000000000000000004")]
  }, 
  {
  "_id": ObjectId("5dce20141735bc0d420a4c17"),
  glucoseEntry: [ObjectId("000000000000000000000003"), ObjectId("000000000000000000000005")]
  }
];

const glucoseSeed = [
  {
  "_id": ObjectId("000000000000000000000001"), 
  "glucoseLevel":"250", 
  "dateCollected": "2019-11-01",
  "timeCollected":"6:00",
  "auth0__id": "5dce30121735bc0d420a4b42"
  },
  {
  "_id": ObjectId("000000000000000000000002"), 
  "glucoseLevel":"225",
  "dateCollected": "2019-11-01", 
  "timeCollected":"11:00",
  "auth0__id": "5dce30121735bc0d420a4b42"
  },
  {
  "_id": ObjectId("000000000000000000000003"),
  "glucoseLevel":"150",
  "dateCollected": "2019-11-05", 
  "timeCollected":"13:00",
  "auth0__id": "5dce20141735bc0d420a4c17"
  },
  {
  "_id": ObjectId("000000000000000000000004"),
  "glucoseLevel":"500", 
  "dateCollected": "2019-11-01",
  "timeCollected":"18:00",
  "auth0__id": "5dce30121735bc0d420a4b42"
  },
  {
  "_id": ObjectId("000000000000000000000005"),
  "glucoseLevel":"250",
  "dateCollected": "2019-11-05", 
  "timeCollected":"22:00",
  "auth0__id": "5dce20141735bc0d420a4c17"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(() => db.FoodLog.collection.insertMany(foodLogSeed))
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(() => db.GlucoseChart.collection.insertMany(glucoseCharteed))
  .then(() => db.Glucose.collection.insertMany(glucoseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
