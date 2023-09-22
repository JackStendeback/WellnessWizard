const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const { Hydration } = require('.');

class Hydration extends Model {}

Hydration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    totalDailyWater: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    targetDailyWater: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
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
    freezeTableName: true,
    underscored: true,
    modelName: 'Calorie',
  }
);

module.exports = Hydration;