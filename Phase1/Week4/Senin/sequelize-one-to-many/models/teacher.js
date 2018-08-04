"use strict";
module.exports = (sequelize, DataTypes) => {
	var Teacher = sequelize.define("Teacher", {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: {
			type:DataTypes.STRING,
			unique:true,
			validate:{
				is:{
					args:/^\w+@[a-z]+\.[a-z]+$/i,
					msg:"email format is incorrect"
				}
			}
		},
		SubjectId: DataTypes.INTEGER
	}, {});
	Teacher.prototype.getFullName = function(){
		return `${this.firstName} ${this.lastName}`;
	};
	Teacher.getKeys = function(){
		return Object.keys(this.rawAttributes);
	};
	Teacher.associate = function(models) {
		Teacher.belongsTo(models.Subject);
	};
	return Teacher;
};