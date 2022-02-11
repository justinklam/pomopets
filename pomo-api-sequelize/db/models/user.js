'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Timer);
      // User.hasMany(models.Timer);
      // User.belongsToMany(models.Pet, { through: models.users_pets });
    }
  }
  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN, defaultValue: true
    }
  }, {
    sequelize,
    tableName: "users",
    modelName: 'User',
  });
  User.associate = (models) => {
    User.hasMany(models.Timer);
    User.belongsToMany(models.Pet, { through: models.users_pets });
  }
  return User;
};