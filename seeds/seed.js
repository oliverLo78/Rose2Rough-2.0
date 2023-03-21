const sequelize = require('../config/connection');
const { User, Review, Wine } = require('../models');

const userSeedData = require('./userSeedData.json');
const wineSeedData = require('./wineSeedData.json');

// when you say sync it will drop the tables and insert the data
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  const wines = await Review.bulkCreate(wineSeedData, {
    individualHooks: true,
    returning: true,
  });


  for (const { id } of users) {
    const newReview = await Review.create({
      user_id: id,
    });
  }

  for (const wine of wineSeedData) {
    const newWine = await Wine.create({
      ...wine,
      // Attach a random user ID to each wine
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
