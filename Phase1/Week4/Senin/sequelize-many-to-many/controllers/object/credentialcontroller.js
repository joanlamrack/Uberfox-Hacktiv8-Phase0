const Model = require("../../models/");
const crypto = require("crypto");

class CredentialController{
	constructor(){

	}

	static add([email, password]){
		return Model.Credential
			.create({
				email,
				password:crypto.createHash("md5").update(password).digest("hex")
			});
	}

	static read_one([CredentialId]){
		return Model.Credential
			.findById(CredentialId);
	}

	static read_all(){
		return Model.Credential
			.findAll();
	}

	static update([password,id]){
		return Model.Credential
			.update(
				{
					password
				},
				{returning: true, where: {id:id}}
			);
	}

	static delete(idCredential){
		return Model.Credential
			.destroy(
				{where: {id : idCredential}}
			);

	}

	static getKeys(){
		return Model.Credential
			.getKeys();
	}

	static getModel(){
		return Model.Credential;
	}
}

module.exports = CredentialController;