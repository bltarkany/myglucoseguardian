const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const foodLogSchema = new Schema({
  foodLogs: [{ type: Schema.Types.ObjectId, ref: "Food" }]
});

const foodLog = mongoose.model("foodLog", foodLogSchema);

module.exports = foodLog;