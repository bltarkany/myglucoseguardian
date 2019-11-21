var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var glucoseSchema = new Schema({
  glucoseLevel: {
    type: Number,
    trim: true,
    required: true
  },
  dateCollected: {
    type: Date,
    required: true
  }
});

var Glucose = mongoose.model("Glucose", glucoseSchema);

module.exports = Glucose;