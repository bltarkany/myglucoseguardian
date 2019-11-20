const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const glucoseChartSchema = new Schema({
  GlucoseLogs: [{ type: Schema.Types.ObjectId, ref: "Glucose" }]
});

const glucoseChart = mongoose.model("glucoseChart", glucoseChartSchema);

module.exports = glucoseChart;