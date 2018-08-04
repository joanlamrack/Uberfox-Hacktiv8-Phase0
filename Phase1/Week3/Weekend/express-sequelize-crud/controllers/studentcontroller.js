const Model = require("../models/");

class StudentController{
	constructor(){

	}

	static add([first_name, last_name, email]){
		return Model.Student
			.create({
				first_name:first_name,
				last_name:last_name,
				email:email
			});
	}

	static read_one(StudentId){
		return Model.Student
			.findById(StudentId);
	}

	static read_all(){
		return Model.Student
			.findAll();
	}

	static update([first_name, last_name, email,id]){
		return Model.Student
			.update(
				{
					first_name: first_name,
					last_name:last_name,
					email:email
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
}

module.exports = StudentController;