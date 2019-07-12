const router = require("express").Router();
const userRoutes = require("./user");
const deviceRoutes = require("./device");

// User routes
router.use("/user", userRoutes);
router.use("/device", deviceRoutes);

module.exports = router;
