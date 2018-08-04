const DataDealer = require("../datadealer.js");

class Contact_Group{
	constructor(contactId, groupId){
		this.contactId = contactId;
		this.groupId = groupId;
		this.tableName = "Contacts_Groups";
	}

	save(){
		
	}

	update(){

	}
}

module.exports = Contact_Group;