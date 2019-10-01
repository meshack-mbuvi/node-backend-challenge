"use strict";
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define(
    "task",
    {
      task_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customer_id: {
        type: DataTypes.INTEGER
      },
      personnel_id: {
        type: DataTypes.INTEGER
      },
      task_status_id: {
        type: DataTypes.INTEGER
      },
      created_by: {
        type: DataTypes.INTEGER
      },
      created: {
        allowNull: false,
        type: DataTypes.DATE
      },
      last_modified: {
        allowNull: false,
        type: DataTypes.DATE
      },
      modified_by: {
        type: DataTypes.INTEGER
      },
      in_progress: {
        type: DataTypes.BOOLEAN
      },
      completed: {
        type: DataTypes.BOOLEAN
      },
      deferred: {
        type: DataTypes.BOOLEAN
      },
      customer_first_name: {
        type: DataTypes.STRING
      },
      customer_last_name: {
        type: DataTypes.STRING
      },
      customer_city: {
        type: DataTypes.STRING
      },
      customer_username: {
        type: DataTypes.STRING
      },
      inserted: {
        type: DataTypes.DATE
      },
      personnel_first_name: {
        type: DataTypes.STRING
      },
      personnel_other_name: {
        type: DataTypes.STRING
      },
      personnel_phone: {
        type: DataTypes.STRING
      },
      task_status_name: {
        type: DataTypes.STRING
      },
      customer_location: {
        type: DataTypes.STRING
      },
      customer_gender: {
        type: DataTypes.STRING
      },
      customer_age: {
        type: DataTypes.INTEGER
      },
      customer_access_code: {
        type: DataTypes.TINYINT
      },
      customer_splash_page: {
        type: DataTypes.TINYINT
      },
      customer_mpesa: {
        type: DataTypes.TINYINT
      },
      customer_autoplay: {
        type: DataTypes.TINYINT
      },
      customer_comments: {
        type: DataTypes.TEXT
      },
      customer_updated: {
        allowNull: false,
        type: DataTypes.DATE
      },
      customer_updated_by: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      agentId: {
        type: DataTypes.INTEGER
      },
      customerId: {
        type: DataTypes.INTEGER
      }
    },
    { tableName: "task" }
  );
  task.associate = function(models) {
    // associations can be defined here
  };
  return task;
};
