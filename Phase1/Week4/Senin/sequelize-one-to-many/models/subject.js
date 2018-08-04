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
	};
	
	return Subject;
};