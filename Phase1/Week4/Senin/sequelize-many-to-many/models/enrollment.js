'use strict';
module.exports = (sequelize, DataTypes) => {
  var Enrollment = sequelize.define('Enrollment', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  Enrollment.associate = function(models) {
	Enrollment.belongsTo(models.Student);
	Enrollment.belongsTo(models.Subject);
  };
  return Enrollment;
};