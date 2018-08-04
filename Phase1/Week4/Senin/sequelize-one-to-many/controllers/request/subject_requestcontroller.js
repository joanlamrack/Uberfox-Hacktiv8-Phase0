const RequestController = require("./requestcontroller.js");
const section = "Subject";

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
		console.log(res.body);
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
}

module.exports = SubjectRequestController;