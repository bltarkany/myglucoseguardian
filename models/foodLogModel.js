const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodLogSchema = new Schema({
  foodEntry: [{ type: Schema.Types.ObjectId, ref: "Food" }]
});

const FoodLog = mongoose.model("FoodLog", foodLogSchema);

module.exports = FoodLog;

