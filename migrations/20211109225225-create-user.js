"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING(64),
        field: "first_name",
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(64),
        field: "last_name",
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unigue: true,
      },
      password: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      isMale: {
        type: Sequelize.BOOLEAN,
        field: "is_male",
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
