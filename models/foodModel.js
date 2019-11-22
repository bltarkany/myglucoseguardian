var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var foodSchema = new Schema({
  meal: {
    type: Number,
    trim: true,
    required: true
  },
  mealTime: {
    type: Date,
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