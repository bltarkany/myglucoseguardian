var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var userSchema = new Schema({
  auth0_id: {
    type: String,
    trim: true,
    required: true
  },
  first_name: {
    type: String,
    trim: true,
    required: true, 
  },
  last_name: {
    type: String,
    trim: true,
    required: true, 
  },
  email: {
    type: String,
    unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  gender: {
    type: String,
    trim: true,
    required: true, 
  },
  dob: {
    type: Date,
    required: true, 
  },
  height: {
    type: Number,
    trim: true,
    required: true, 
  },
  weight: {
    type: Number,
    trim: true,
    required: true, 
  },
  diabetes_type: {
    type: Number,
    trim: true,
    required: true, 
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

var userModel = mongoose.model("User", userSchema);

module.exports = userModel;
