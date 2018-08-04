'use strict';
module.exports = (sequelize, DataTypes) => {
  var Credential = sequelize.define('Credential', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Credential.associate = function(models) {
    // associations can be defined here
  };
  return Credential;
};