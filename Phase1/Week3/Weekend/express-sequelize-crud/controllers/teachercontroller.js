const Model = require("../models/");

class TeacherController{
	constructor(){

	}

	static add([first_name, last_name, email]){
		return Model.Teacher
			.create({
				first_name:first_name,
				last_name:last_name,
				email:email
			});
	}

	static read_one(TeacherId){
		return Model.Teacher
			.findById(TeacherId);
	}

	static read_all(){
		return Model.Teacher
			.findAll();
	}

	static update([first_name, last_name, email, id]){
		return Model.Teacher
			.update(
				{
					first_name: first_name,
					last_name:last_name,
					email:email
				},
				{returning: true, where: {id:id}}
			);
	}

	static delete(idTeacher){
		return Model.Teacher
			.destroy(
				{where: {id : idTeacher}}
			);

	}

	static getKeys(){
		return Model.Teacher
			.getKeys();
	}
}

module.exports = TeacherController;