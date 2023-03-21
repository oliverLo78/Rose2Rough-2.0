const router = require('express').Router();
const driverRoutes = require('./driverRoutes');

router.use('/users', userRoutes);

module.exports = router;
