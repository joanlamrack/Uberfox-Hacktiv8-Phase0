"use strict";
module.exports = (sequelize, DataTypes) => {
	var Student = sequelize.define("Student", {
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		gender: DataTypes.STRING,
		birthday: DataTypes.DATE,
		email: {
			type:DataTypes.STRING,
			validate: {
				is:{
					args:/^\w+@[a-z]+\.[a-z]{3}$/i,
					msg:"invalid email format"
				},
				isUnique:(value, next)=>{
					Student.find({
						where: {email: value},
						attributes: ["id"]
					})
						.done((error, user)=>{
							if (error)
								return next("Email address already in use!");
	
							if (user)
								return next("Email address already in use!");
							next();
						});	
				}

			}
		},
		phone: {
			type:DataTypes.STRING,
			validate:{
				len:{
					args:[10,13],
					msg:"phone number length must be between 10 and 13"
				},
				isNumeric:{
					msg: "telephone number must be numeric"
				}
			}	
		},
		height:{
			type:DataTypes.INTEGER,
			validate:{
				min: {
					args:150,
					msg: "tinggi minimal 150 gitu"
				}
			}
		}

	}, {});

	//instance method
	Student.prototype.getFullName = function(){
		return `${this.first_name} ${this.last_name}`;
	};

	Student.prototype.getAge = function(){
		return  new Date().getFullYear() - this.birthday.getFullYear();
	};

	//Class Method

	Student.getFemaleStudent = ()=>{
		return Student.findAll(
			{where : 
				{gender: "female"}
			}
		);
	};

	Student.getStudentById = (id)=>{
		return Student.findOne(
			{where : 
				{id: id}
			}
		);
	};

	Student.deleteById = (id)=>{
		return Student.destroy(
			{where : 
				{id:id}
			}
		);
	};

	Student.associate = function(models) {
		// associations can be defined here
	};
	return Student;
};

