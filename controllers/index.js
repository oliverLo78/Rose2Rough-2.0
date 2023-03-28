const router = require('express').Router();

const apiRoutes = require('./api');
const reviewRoutes = require('./reviewRoutes');

router.use('/', reviewRoutes);
router.use('/api', apiRoutes);

module.exports = router;
