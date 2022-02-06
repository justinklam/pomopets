'use strict';
import Users from './user';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pets.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  Pets.hasMany(Users);
  return Pets;
};