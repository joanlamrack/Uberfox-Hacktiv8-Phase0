const Model = require("../../models/");

class StudentController{
	constructor(){

	}

	static add([firstName, lastName, email]){
		return Model.Student
			.create({
				firstName:firstName,
				lastName:lastName,
				email:email,
			});
	}

	static read_one([StudentId]){
		return Model.Student
			.findById(StudentId);
	}

	static read_all(){
		return Model.Student
			.findAll({
				include:[Model.Subject]
			});
	}

	static update([firstName, lastName, email,id]){
		return Model.Student
			.update(
				{
					firstName: firstName,
					lastName:lastName,
					email:email,
					
				},
				{returning: true, where: {id:id}}
			);
	}

	static delete(idStudent){
		return Model.Student
			.destroy(
				{where: {id : idStudent}}
			);

	}

	static getKeys(){
		return Model.Student
			.getKeys();
	}

	static getModel(){
		return Model.Student;
	}
}

module.exports = StudentController;