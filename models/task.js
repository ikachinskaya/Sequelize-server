"use strict";
const { Model } = require("sequelize");
const { isBefore } = require("date-fns");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Task.init(
    {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      deadline: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          isDate: true,
          isValidate(value) {
            if (isBefore(new Date(value), new Date())) {
              throw new Error("Bad date");
            }
          },
        },
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "is_done",
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Task",
      underscored: true,
      tableName: "tasks",
    }
  );
  return Task;
};
