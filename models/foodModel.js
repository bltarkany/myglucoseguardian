var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var foodSchema = new Schema({
  meal: {
    type: String,
    trim: true,
    required: true
  },
  mealTime: {
    type: String,
    required: true
  },
  carbsAmt: {
    type: String,
    trim: true,
    required: true
  }
});

var Food = mongoose.model("Food", foodSchema);

module.exports = Food;