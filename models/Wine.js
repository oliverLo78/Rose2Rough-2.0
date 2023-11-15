const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our wine model
class Wine extends Model {}

// create fields/columns for Location model
Wine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    wine_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    taster_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_twenty_one: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'wine',
  }
);

module.exports = Wine;

  
