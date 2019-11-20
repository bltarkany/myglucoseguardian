const router = require("express").Router();
const glucoseChartController = require("../../controllers/glucoseChartController");

// Matches with "/api/glucoseChart"
router.route("/")
    .get(glucoseChartController.findAll)
    .post(glucoseChartController.create);

// Matches with "/api/glucoseChart/:id"
router
    .route("/:id")
    .get(glucoseChartController.findById)
    .put(glucoseChartController.update)
    .delete(glucoseChartController.remove);

module.exports = router;