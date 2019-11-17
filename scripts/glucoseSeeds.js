const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3"
);

const glucoseSeed = [
  {"auth0_Id":"12345rutdhsf", 
  "glucoseLevel":"250", 
  "timeCollected":"6:00"
  },
  {"auth0_Id":"12345rutdhsf", 
  "glucoseLevel":"225", 
  "timeCollected":"11:00"
  },
  {"auth0_Id":"12345rutdhsf", 
  "glucoseLevel":"150", 
  "timeCollected":"13:00"
  },
  {"auth0_Id":"12345rutdhsf", 
  "glucoseLevel":"500", 
  "timeCollected":"18:00"
  },
  {"auth0_Id":"12345rutdhsf", 
  "glucoseLevel":"250", 
  "timeCollected":"22:00"
  }
];

db.Glucose
  .remove({})
  .then(() => db.Glucose.collection.insertMany(glucoseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
