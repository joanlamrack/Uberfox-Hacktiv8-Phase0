const RequestController = require("./requestcontroller.js");
const section = "Subject";
const Student = RequestController.getModel("Student");
const Enrollment = RequestController.getModel("Enrollment");

class SubjectRequestController{
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

	static getModel(){
		return RequestController.getModel(section);
	}

	static enrollSubject_get(req,res){
		let Subject = SubjectRequestController.getModel();
		Subject.findOne({
			include:[Student],
			where:{
				id:req.params.id
			}
		})
			.then((student)=>{
				//res.send(student);
				res.render("subjectscore",{
					title:"Give Score",
					subjectName: student.subjectName,
					studentAndScores: student.Students.map(s=>{
						return {
							id: s.id,
							name: `${s.firstName} ${s.lastName}`,
							score : s.Enrollment.score
						};
					})
				});
			})
			.catch((err)=>{
				res.render("error", {err});
			});
	}

	static giveScore_get(req,res){
		res.render("givescore",{title:"Give Score"});
	}

	static giveScore_post(req,res){
		Enrollment
			.update(
				{
					score:req.body.score
				},
				{
					returning: true, where: {
						SubjectId:req.params.id,
						StudentId:req.params.studentId
					}
				}
			)
			.then(()=>{
				res.redirect(`/subjects/${req.params.id}/enrolled-students`);
			})
			.catch((err)=>{
				res.render("error", {err});
			});
	}
	
}

module.exports = SubjectRequestController;