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
      //  Pet.belongsToMany(models.User, { through: models.users_pets });
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
  Pet.associate = (models) => {
    Pet.belongsToMany(models.User, { through: models.users_pets });
  }
  return Pet;
};