const RequestController = require("./requestcontroller.js");
const Op = require("sequelize").Op;
const Student = RequestController.getModel("Student");
const Subject = RequestController.getModel("Subject");
const Enrollment = RequestController.getModel("Enrollment");

const section = "Student";


class StudentRequestController{
	constructor(){
		
	}

	static viewall_get(req,res){
		return RequestController.viewall_get(section,req,res);
	}

	static add_get(req,res){
		return RequestController.add_get(section,req,res);
	}

	static add_post(req,res){
		return RequestController.add_post(section,req,res);
	}

	static delete_get(req,res){
		return RequestController.delete_get(section,req,res);
	}

	static edit_get(req,res){
		return RequestController.edit_get(section,req,res);
	}

	static edit_post(req,res){
		return RequestController.edit_post(section,req,res);
	}

	static view_enrolled_get(req,res){
		Student.getEnrollSubjectId(req.params.id)
			.then((enrollments)=>{
				let enrolledSubjectId = enrollments.map(x=>x.SubjectId);
				return Subject.findAll({
					where:{
						id:{
							[Op.notIn]:enrolledSubjectId
						}
					}
				});
			})
			.then((subjects)=>{
				Student.findById(req.params.id)
					.then(studentData=>{
						res.render("enroll",{title:"Student Enrollment",studentData,subjects});
					})
					.catch((err)=>{
						res.render("error",{err});
					});
			})
			.catch((err)=>{
				res.render("error",{err});
			});
	}

	static view_enrolled_post(req,res){
		Enrollment.create({
			SubjectId:req.body.SubjectId,
			StudentId:req.params.id
		})
			.then((response)=>{
				res.redirect("/students");
			})
			.catch((err)=>{
				res.render("error",{err});
			});
	}
}

module.exports = StudentRequestController;