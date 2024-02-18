const User = require('./User');
const Review = require('./Review');

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



module.exports = { User, Review };
