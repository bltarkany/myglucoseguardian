var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var glucoseSchema = new Schema({
  auth0_id: {
    type: String,
    trim: true,
    required: true
  },
  glucoseLevel: {
    type: Number,
    trim: true,
    required: true
  },
  timeCollected: {
    type: Date,
    default: Date.timestamps
  }
});

var glucoseModel = mongoose.model("glucoseInput", glucoseSchema);

module.exports = glucoseModel;