const router = require("express").Router();
const glucoseController = require("../../controllers/glucoseController");

// Matches with "/api/glucose"
router.route("/")
    .get(glucoseController.findAll)
    .post(glucoseController.create);

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

module.exports = router;