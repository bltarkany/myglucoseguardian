const router = require("express").Router();
const glucoseController = require("../../controllers/glucoseController");

// Matches with "/api/glucose"
router.route("/")
    .get(glucoseController.findAll)
    .post(glucoseController.create);

// Matches with "/api/glucose"
router.route("/aggregate")
.get(glucoseController.findAll)
.post(glucoseController.aggregate);

// Matches with "/api/glucose/:id"
router
    .route("/:id")
    .get(glucoseController.findByAuthId)
    .put(glucoseController.update)
    .delete(glucoseController.remove);

router
    .route("/:id/:date")
    .get(glucoseController.findByAuthIdAndDate)
    .put(glucoseController.update)
    .delete(glucoseController.remove);

// Matches with "/api/glucose/:startDate/:endDate" 
router
    .route("/:id/:start_Date/:end_Date")
    .get(glucoseController.findByAuthIdAndStartEndDate)
router
    .route("/:id/:glucoseLevel/:date/:time")
    .post(glucoseController.createNewRecord)
    .put(glucoseController.update)
    .delete(glucoseController.remove);

module.exports = router;