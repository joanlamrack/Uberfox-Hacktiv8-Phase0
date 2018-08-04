const Model = require("../../models/");

class EnrollmentController{
	constructor(){

	}

	static add([SubjectId, StudentId, score]){
		return Model.Enrollment
			.create({
				SubjectId,
				StudentId,
				score
			});
	}

	static read_one([EnrollmentId]){
		return Model.Enrollment
			.findById(EnrollmentId);
	}

	static read_all(){
		return Model.Enrollment
			.findAll({
				include:[Model.Subject]
			});
	}

	static update([SubjectId, StudentId, score ,id]){
		return Model.Enrollment
			.update(
				{
					SubjectId,
					StudentId,
					score
				},
				{returning: true, where: {id:id}}
			);
	}

	static delete(idEnrollment){
		return Model.Enrollment
			.destroy(
				{where: {id : idEnrollment}}
			);

	}

	static getKeys(){
		return Model.Enrollment
			.getKeys();
	}

	static getModel(){
		return Model.Enrollment;
	}
}

module.exports = EnrollmentController;