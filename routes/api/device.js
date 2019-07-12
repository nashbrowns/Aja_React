const router = require("express").Router();
const deviceController = require("../../controllers/deviceController");

// Matches with "/api/device"
router.route("/")
  .get(deviceController.findAll)
  .post(deviceController.create);

// Matches with "/api/device/:id"
router
  .route("/:id")
  .get(deviceController.findById)
  .put(deviceController.update)
  .delete(deviceController.remove);

module.exports = router;