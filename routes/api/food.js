const router = require("express").Router();
const foodController = require("../../controllers/foodController");

// Matches with "/api/food"
router.route("/")
    .get(foodController.findAll)
    .post(foodController.create);

// Matches with "/api/food/:id"
router
    .route("/:id")
    .get(foodController.findById)
    .put(foodController.update)
    .delete(foodController.remove);

module.exports = router;