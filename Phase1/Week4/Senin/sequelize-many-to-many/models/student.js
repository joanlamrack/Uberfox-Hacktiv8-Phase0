"use strict";
module.exports = (sequelize, DataTypes) => {
	var Student = sequelize.define("Student", {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING
	}, {});

	Student.getKeys = function(){
		return Object.keys(this.rawAttributes);
	};

	Student.prototype.getEnrollSubjectId = function(){
		let Enrollment = require("../models").Enrollment;
		let Subject = require("../models").Subject;
		return Enrollment.findAll({
			include:[Subject],
			where:{
				StudentId: this.id
			}
		});	
	};

	Student.getEnrollSubjectId = function(StudentId){
		let Enrollment = require("../models").Enrollment;
		let Subject = require("../models").Subject;
		return Enrollment.findAll({
			order:[["id","ASC"]],
			where:{
				StudentId: StudentId
			}
		});	
	}

	Student.associate = function(models) {
		Student.hasMany(models.Enrollment);
		Student.belongsToMany(models.Subject, {through: "Enrollment", foreignKey: "StudentId"});
	
	};
	return Student;
};