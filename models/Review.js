const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Review extends Model {
    //Define a static method to retrieve a random review record
    static async random() {
      try {
        const count = await this.count(); // Get the total number of records in the table
        const randomOffset = Math.floor(Math.random() * count); // Generate a random offset
        const randomReview = await this.findOne({ offset: randomOffset }); // Retrieve a random record
        return randomReview;
      } catch (error) {
        throw error;
      }
    }
}

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
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taster_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // taster_twitter_handle: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    variety: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    winery: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   //Store a reference of the 'id' of the 'User' that owns this Review
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
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;