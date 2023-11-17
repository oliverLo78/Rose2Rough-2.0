const sequelize = require('../config/connection');
const { User, Review, Cellar } = require('../models');
const seedWines = require('./wineSeedData');

const userSeedData = require('./userSeedData.json');
const reviewSeedData = require('./reviewSeedData.json');

// when you say sync it will drop the tables and insert the data
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  const review = await Review.bulkCreate(reviewSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of users) {
    const newReview = await Review.create({
      user_id: id,
    });
  }

  for (const review of reviewSeedData) {
     await Review.create({
      ...review,
      // Attach a random user ID to each wine
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
