var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var foodSchema = new Schema({
  auth0_id: {
    type: String,
    trim: true,
    required: true
  },
  meal: {
    type: Number,
    trim: true,
    required: true
  },
  mealTime: {
    type: String,
    trim: true,
    required: true
  },
  carbsAmt: {
    type: Number,
    trim: true,
    required: true
  }
});

var foodModel = mongoose.model("foodInput", foodSchema);

module.exports = foodModel;