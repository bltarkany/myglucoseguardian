const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const glucoseChartSchema = new Schema({
  glucoseEntry: [{ type: Schema.Types.ObjectId, ref: "Glucose" }]
});

const GlucoseChart = mongoose.model("GlucoseChart", glucoseChartSchema);

module.exports = GlucoseChart;