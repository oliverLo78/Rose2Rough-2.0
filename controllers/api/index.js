const router = require("express").Router();

const reviewRoutes = require("./reviewRoutes.js");

router.use("/review", reviewRoutes);


module.exports = router;
