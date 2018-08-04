'use strict';
module.exports = (sequelize, DataTypes) => {
	var Subject = sequelize.define('Subject', {
		subjectName: DataTypes.STRING
	}, {});

	Subject.getKeys = function(){
		return Object.keys(this.rawAttributes);
	};
	Subject.associate = function(models) {
		Subject.hasMany(models.Teacher);
		Subject.hasMany(models.Enrollment);
		Subject.belongsToMany(models.Student, {through: 'Enrollment', foreignKey: 'SubjectId'});
	};
	
	return Subject;
};