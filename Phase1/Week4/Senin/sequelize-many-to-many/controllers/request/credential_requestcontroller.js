const RequestController = require("./requestcontroller.js");
const section = "Credential";

class CredentialRequestController{
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

	static login_get(req,res){
		//halaman login
		res.render("login",{title:"login"});
	}
	static login_post(req,res){
		//cocokan dengan yang ada di database
		let salt = crypto.createCipher("md5", req.body.email);
		let combined = req.body.password + salt;
		let encryptedPassword = crypto.createHash("md5").update(combined).digest("hex");

		Credential.findOne({
			where:{
				email:req.body.email,
				password:encryptedPassword
			}
		})
			.then((userdata)=>{
				res.send(userdata);
			})
			.catch((err)=>{
				res.render("error",{err});
			});
	}

	static register_get(req,res){
		//halaman register
		//nama form(email dan password)
		res.render("register");
	}

	static register_post(req,res){
		let Credential = this.getModel();
		let salt = crypto.createCipher("md5", req.body.email);
		let combined = req.body.password + salt;
		let encryptedPassword = crypto.createHash("md5").update(combined).digest("hex");
		Credential.create({
			email:req.body.email,
			password:encryptedPassword
		})
			.then(()=>{
			//back to login page
				res.redirect("/login");
			})
			.catch((err)=>{
				res.render("error",{err});
			});
	}
}
module.exports = CredentialRequestController;