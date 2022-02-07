'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {


      // Timer.belongsTo(models.User, {foreignKey: 'userId'});
    }
  }
  Timer.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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