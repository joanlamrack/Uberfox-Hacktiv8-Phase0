const Group = require("./model_group.js");

class GroupController{
	constructor(){

	}

	static createNew(contactId, groupId){
		let newGroup = new Group(null, contactId, groupId);
		newGroup.save()
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response));

	}

	static update(id,variableToUpdate,newValue){
		Group.findById(id)
		.then((response)=> response.update(variableToUpdate, newValue))
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response))
	}

	static delete(id){
		//cari row di Contacts_Groups yang GroupId nya sama dengan id dari parameter, delete
		//cari row di Groups yang GroupIdnya dama dengan parameter, delete
		Group.findById(id)
		.then((response)=>response.delete())
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response));

	}

	static show(id){
		Group.findById(id)
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response))
	}
}

module.exports = GroupController;