const router = require('express').Router();
const { User, Review, Wine } = require('../../models');

// GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: Review }, { model: Wine }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single driver
router.get('/:id', async (req, res) => {
  try {
    const driverData = await Driver.findByPk(req.params.id, {
      include: [{ model: License }, { model: Car }],
    });

    if (!driverData) {
      res.status(404).json({ message: 'No driver found with that id!' });
      return;
    }

    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;