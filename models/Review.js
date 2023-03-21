const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    country: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: true,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
    region_1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
    taster_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
    variety: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
    winery: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: true,
    },
    // Store a reference of the 'id' of the 'User' that owns this Review
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: false,
    // underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;