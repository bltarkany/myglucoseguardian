var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var glucoseSchema = new Schema({
  glucoseLevel: {
    type: Number,
    trim: true,
    required: true
  },
  dateCollected: {
    type: String,
    required: true
  },
  timeCollected: {
    type: String,
    required: true
  },
  DateEntered: {
    type: Date,
    default: Date.now,
    required: true
  },
  auth0__id: {
    type:String,
    required: true
  }
});

var Glucose = mongoose.model("Glucose", glucoseSchema);

module.exports = Glucose;