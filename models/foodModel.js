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
  calories: {
    type: Number,
    trim: true,
    required: true
  },
  fats: {
    type: Number,
    trim: true,
    required: true
  },
  carbs: {
    type: Number,
    trim: true,
    required: true
  },
  sugar: {
    type: Number,
    trim: true,
    required: true
  },
  dietFiber: {
    type: Number,
    trim: true,
    required: true
  },
  protiens: {
    type: Number,
    trim: true,
    required: true
  },
});

var Food = mongoose.model("Food", foodSchema);

module.exports = Food;