'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users_pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users_pets.init({
    user_id: DataTypes.STRING,
    pet_id: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'users_pets',
    modelName: 'users_pets',
  });
  return users_pets;
};