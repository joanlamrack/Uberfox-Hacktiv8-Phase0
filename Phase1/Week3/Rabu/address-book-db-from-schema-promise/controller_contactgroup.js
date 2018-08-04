const Contact_Group = require("./model_contactgroup.js");

class Contact_GroupController{
	constructor(){

	}

	static createNew(contactId, groupId){
		let newContact_Group = new Contact_Group(null, contactId, groupId);
		newContact_Group.save()
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response));

	}

	static update(id,variableToUpdate,newValue){
		Contact_Group.findById(id)
		.then((response)=>response.update(variableToUpdate, newValue))
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response))
	}

	static delete(id){
		Contact_Group.findById(id)
		.then((response)=> response.delete())
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response));
	}

	static show(id){
		Contact_Group.findById(id)
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response))
	}
}

module.exports = Contact_GroupController;