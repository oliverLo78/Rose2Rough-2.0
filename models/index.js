const User = require('./User');
const Review = require('./Review');
const Cellar = require('./Cellar');

// Define a User as having many Reviews, thus creating a foreign key in the 
// 'review' table
User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Review side
Review.belongsTo(User, {
  foreignKey: 'user_id',
});

// Define a Review as having many Cellars, thus creating a foreign key in the
// 'cellar' table
Review.hasMany(Cellar, {
  foreignKey: 'review_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Cellar side
Cellar.belongsTo(Review, {
  foreignKey: 'review_id',
});

module.exports = { User, Review, Cellar};
