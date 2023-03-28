const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('../reviewRoutes');
const reviewlistRoutes = require('./reviewlistRoutes');

router.use('/users', userRoutes);
router.use('/review', reviewRoutes);
router.use('/reviewList', reviewlistRoutes);

module.exports = router;
