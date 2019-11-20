const router = require("express").Router();
const foodLogController = require("../../controllers/foodLogController");

// Matches with "/api/foodLog"
router.route("/")
    .get(foodLogController.findAll)
    .post(foodLogController.create);

// Matches with "/api/foodLog/:id"
router
    .route("/:id")
    .get(foodLogController.findById)
    .put(foodLogController.update)
    .delete(foodLogController.remove);

module.exports = router;