"use strict";
const { Model } = require("sequelize");
const { isBefore } = require("date-fns");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Task, {
        foreignKey: "userId",
      });
      User.hasMany(models.Post, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING(64),
        field: "first_name",
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING(64),
        field: "last_name",
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unigue: true,
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: "password_hash",
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: true,
          isDate: true,
          isValidate(value) {
            if (isBefore(new Date(), new Date(value))) {
              throw new Error("Bad birthday date");
            }
          },
        },
      },
      isMale: {
        type: DataTypes.BOOLEAN,
        field: "is_male",
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
      tableName: "users",
    }
  );
  return User;
};
