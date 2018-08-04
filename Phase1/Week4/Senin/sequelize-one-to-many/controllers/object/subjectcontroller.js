const Model = require("../../models/");

class SubjectController{
	constructor(){

	}

	static add([subjectName]){
		console.log("subjejdsfaskdf", subjectName);
		return Model.Subject
			.create({
				subjectName:subjectName
			});
	}

	static read_one([SubjectId]){
		return Model.Subject
			.findById(SubjectId);
	}

	static read_all(){
		return Model.Subject
			.findAll({
				include:[Model.Teacher]
			});
	}

	static update([subjectName,id]){
		return Model.Subject
			.update(
				{
					subjectName:subjectName
				},
				{returning: true, where: {id:id}}
			);
	}

	static delete([idSubject]){
		return Model.Subject
			.destroy(
				{where: {id : idSubject}}
			);

	}

	static getKeys(){
		return Model.Subject
			.getKeys();
	}
}

module.exports = SubjectController;