'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Pet.belongsToMany(User, { through: user_pets });
    }
  }
  Pet.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'pets',
    modelName: 'Pet',
  });
  return Pet;
};