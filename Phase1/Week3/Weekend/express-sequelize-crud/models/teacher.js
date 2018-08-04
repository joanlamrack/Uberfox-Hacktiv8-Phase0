'use strict';
module.exports = (sequelize, DataTypes) => {
	var Teacher = sequelize.define('Teacher', {
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email: DataTypes.STRING
	}, {});

	Teacher.getKeys = function(){
		return Object.keys(this.rawAttributes);
	};

	Teacher.associate = function(models) {
		// associations can be defined here
	};
	return Teacher;
};

