const router = require("express").Router();
const userRoutes = require("./user");
const foodLogRoutes = require("./foodLog");
const foodRoutes = require("./food");
const glucoseChartRoutes = require("./glucoseChart");
const glucoseRoutes = require("./glucose");

//test
//const listRoutes = require("./list")
//router.use("/list", listRoutes);

//routes
router.use("/user", userRoutes);
router.use("/foodLog", foodLogRoutes);
router.use("/food", foodRoutes);
router.use("/glucoseChart", glucoseChartRoutes);
router.use("/glucose", glucoseRoutes);




module.exports = router;