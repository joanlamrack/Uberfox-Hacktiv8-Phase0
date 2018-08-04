"use strict";
module.exports = (sequelize, DataTypes) => {
	var Student = sequelize.define("Student", {
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email: DataTypes.STRING
	}, {});


	Student.getKeys = function(){
		return Object.keys(this.rawAttributes);
	};


	Student.associate = function(models) {
		// associations can be defined here
	};
	return Student;
};

