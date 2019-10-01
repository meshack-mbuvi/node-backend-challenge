"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("personnel", {
      personnel_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personnel_onames: {
        type: Sequelize.STRING
      },
      personnel_fname: {
        type: Sequelize.STRING
      },
      personnel_email: {
        type: Sequelize.STRING
      },
      personnel_phone: {
        type: Sequelize.STRING
      },
      personnel_password: {
        type: Sequelize.STRING
      },
      personnel_status: {
        type: Sequelize.STRING
      },
      last_login: {
        type: Sequelize.DATE
      },
      personnel_type_id: {
        type: Sequelize.INTEGER
      },
      reset_password: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("personnel");
  }
};
