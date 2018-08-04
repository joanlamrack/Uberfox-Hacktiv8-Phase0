const Model = require("../models/");

class SubjectController{
	constructor(){

	}

	static add([subject_name]){
		return Model.Subject
			.create({
				subject_name:subject_name
			});
	}

	static read_one([SubjectId]){
		return Model.Subject
			.findById(SubjectId);
	}

	static read_all(){
		return Model.Subject
			.findAll();
	}

	static update([subject_name,id]){
		return Model.Subject
			.update(
				{
					subject_name:subject_name
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