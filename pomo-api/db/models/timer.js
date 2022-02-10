'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Timer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Timer.belongsTo(models.User, {foreignKey: 'user_id'});


      // Timer.belongsTo(models.User, {foreignKey: 'userId'});
    }
  }
  Timer.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id"
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    tableName: 'timers',
    modelName: 'Timer',
  });
  Timer.associate = (models) => {
    Timer.belongsTo(models.User, {foreignKey: 'user_id'});
  }
  return Timer;
};