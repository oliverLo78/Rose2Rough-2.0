const router = require("express").Router();
const userRoutes = require('./user-routes');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/users', userRoutes);

module.exports = router;
