"use strict";
module.exports = (sequelize, DataTypes) => {
  const personnel = sequelize.define(
    "Personnel",
    {
      personnel_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      personnel_onames: {
        type: DataTypes.STRING
      },
      personnel_fname: {
        type: DataTypes.STRING
      },
      personnel_email: {
        type: DataTypes.STRING
      },
      personnel_phone: {
        type: DataTypes.STRING
      },
      personnel_password: {
        type: DataTypes.STRING
      },
      personnel_status: {
        type: DataTypes.STRING
      },
      last_login: {
        type: DataTypes.DATE
      },
      personnel_type_id: {
        type: DataTypes.INTEGER
      },
      reset_password: {
        type: DataTypes.STRING
      }
    },
    { tableName: "personnel" }
  );
  personnel.associate = function(models) {
    // associations can be defined here
  };
  return personnel;
};
