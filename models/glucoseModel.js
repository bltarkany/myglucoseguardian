var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var GlucoseSchema = new Schema({
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

var GlucoseModel = mongoose.model("GlucoseInput", GlucoseSchema);

module.exports = GlucoseModel;