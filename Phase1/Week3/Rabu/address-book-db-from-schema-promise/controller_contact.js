const Contact = require("./model_contact.js");
const View = require("./view.js");

class ContactController{
	constructor(){

	}

	static createNew(name, company, telephone, email){
		let newContact = new Contact(null, name, company, telephone, email);
		newContact.save()
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response));

	}

	static update(id,variableToUpdate,newValue){
		Contact.findById(id)
		.then((response)=>response.update(variableToUpdate, newValue))
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response))
	}

	static delete(id){
		Group.findById(id)
		.then((response)=>response.delete())
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response));
	}

	static show(id){
		Contact.findById(id)
		.then((response)=>View.printMessage(response))
		.catch((response)=>View.printMessage(response))
	}
}

module.exports = ContactController;