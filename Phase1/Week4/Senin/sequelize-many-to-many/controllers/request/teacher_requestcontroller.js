const RequestController = require("./requestcontroller");
const section = "Teacher";

class TeacherRequestController{
	constructor(){
		
	}

	static viewall_get(req,res){
		RequestController.viewall_get(section,req,res);
	}

	static add_get(req,res){
		RequestController.add_get(section,req,res);
	}

	static add_post(req,res){
		RequestController.add_post(section,req,res);
	}

	static delete_get(req,res){
		RequestController.delete_get(section,req,res);
	}

	static edit_get(req,res){
		RequestController.edit_get(section,req,res);
	}

	static edit_post(req,res){
		RequestController.edit_post(section,req,res);
	}
}

module.exports = TeacherRequestController;