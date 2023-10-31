const router = require("express").Router();

const reviewRoutes = require("./reviewRoutes.js");
const userRoutes = require('./user-routes');

router.use("/review", reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;
