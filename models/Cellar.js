const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our wine model
class Cellar extends Model {}

// create fields/columns for Location model
Cellar.init(
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
    modelName: 'cellar',
  }
);

module.exports = Cellar;

  
