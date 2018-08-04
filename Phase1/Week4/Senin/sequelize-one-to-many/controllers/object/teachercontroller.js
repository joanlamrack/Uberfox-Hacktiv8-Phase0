const Model = require("../../models/");

class TeacherController{
	constructor(){

	}

	static add([firstName, lastName, email, SubjectId]){
		return Model.Teacher
			.create({
				firstName:firstName,
				lastName:lastName,
				email:email,
				SubjectId
			});
	}

	static read_one([TeacherId]){
		return Model.Teacher
			.findById(TeacherId);
	}

	static read_all(){
		return Model.Teacher
			.findAll({
				include:[Model.Subject]
			});
	}

	static update([firstName, lastName, email, SubjectId,id]){
		return Model.Teacher
			.update(
				{
					firstName: firstName,
					lastName:lastName,
					email:email,
					SubjectId:SubjectId
					
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