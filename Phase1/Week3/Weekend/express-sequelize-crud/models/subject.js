"use strict";
module.exports = (sequelize, DataTypes) => {
	var Subject = sequelize.define("Subject", {
		subject_name: DataTypes.STRING
	}, {});


	Subject.getKeys = function(){
		return Object.keys(this.rawAttributes);
	};

	Subject.associate = function(models) {
		// associations can be defined here
	};
	return Subject;
};

