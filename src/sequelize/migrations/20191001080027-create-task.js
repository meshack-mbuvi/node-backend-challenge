"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("task", {
      task_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: Sequelize.INTEGER
      },
      personnel_id: {
        type: Sequelize.INTEGER
      },
      task_status_id: {
        type: Sequelize.INTEGER
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      last_modified: {
        allowNull: false,
        type: Sequelize.DATE
      },
      modified_by: {
        type: Sequelize.INTEGER
      },
      in_progress: {
        type: Sequelize.BOOLEAN
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      deferred: {
        type: Sequelize.BOOLEAN
      },
      customer_first_name: {
        type: Sequelize.STRING
      },
      customer_last_name: {
        type: Sequelize.STRING
      },
      customer_city: {
        type: Sequelize.STRING
      },
      customer_username: {
        type: Sequelize.STRING
      },
      inserted: {
        type: Sequelize.DATE
      },
      personnel_first_name: {
        type: Sequelize.STRING
      },
      personnel_other_name: {
        type: Sequelize.STRING
      },
      personnel_phone: {
        type: Sequelize.STRING
      },
      task_status_name: {
        type: Sequelize.STRING
      },
      customer_location: {
        type: Sequelize.STRING
      },
      customer_gender: {
        type: Sequelize.STRING
      },
      customer_age: {
        type: Sequelize.INTEGER
      },
      customer_access_code: {
        type: Sequelize.TINYINT
      },
      customer_splash_page: {
        type: Sequelize.TINYINT
      },
      customer_mpesa: {
        type: Sequelize.TINYINT
      },
      customer_autoplay: {
        type: Sequelize.TINYINT
      },
      customer_comments: {
        type: Sequelize.TEXT
      },
      customer_updated: {
        allowNull: false,
        type: Sequelize.DATE
      },
      customer_updated_by: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      agentId: {
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("task");
  }
};
