const User = require('./User');
const Review = require('./Review');
const Wine = require('./Wine');

// Define a User as having many Wines, thus creating a foreign key in the 
// 'wine' table
User.hasMany(Wine, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Wine side
Wine.belongsTo(User, {
  foreignKey: 'user_id',
});

User.belongsToMany(Review, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Wine,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_wines'
});

Review.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Wine,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'review_users'
});

module.exports = { User, Review, Wine };
