const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const { Calorie } = require('.');

class Calorie extends Model {}

Calorie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    totalDailyCalories: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    targetDailyCalories: {
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

module.exports = Calorie;