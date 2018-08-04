const db = require("./db.js");
class Contact{
	constructor(id, name, company, telephone, email, memberOfGroup){
		this.id = id || 0;
		this.name = name;
		this.company = company;
		this.telephone = telephone;
		this.email = email;
		this.memberOfGroup = memberOfGroup.split(",") || [];
		this.tableName = "Contacts";
	}

	save(){
		return new Promise((resolve, reject)=>{
			if(!this.id){
				let query = `INSERT INTO ${this.tableName} (name, company, telephone, email) 
					VALUES ("${this.name}",
					"${this.company}",
					"${this.telephone}",
					"${this.email}");`;

				db.run(query, (err)=>{
					if(err)reject(err)
					resolve("Data Berhasil disimpan");
				});
				this.getLastInsertedIdPromise()
				.then((response)=>this.id = response)
				.catch((response)=>reject(response))
			}
		});
	}

	update(variableToUpdate, newValue){
		return new Promise((resolve, reject)=>{
			if(this[variableToUpdate]){
				this[variableToUpdate] = newValue;

				let query = `UPDATE ${this.tableName} 
				SET name = "${this.name}",
				company = "${this.company}",
				telephone = "${this.telephone}",
				email = "${this.email}"
				WHERE id = "${this.id}"`;
				
				db.run(query, (err)=>{
					if(err)reject(err)
					else resolve("Data Berhasil di update");
				});
			}
			else {
				reject("No Such Variable!");
			}
			
		});
	}

	delete(){
		return new Promise((resolve, reject)=>{
			let query = `DELETE FROM ${this.tableName} WHERE id = "${this.id}"`;
			db.run(query,(err)=>{
				if(err)reject(err)
				resolve("Data sudah dihapus");
			});
		});
		
	}


	getLastInsertedIdPromise(){
		return new Promise((resolve, reject)=>{
			let lastId_query = `SELECT seq FROM sqlite_sequence where name = "${this.tableName}"`;

			db.get(lastId_query, (err, row)=>{
				if(err)reject(err);
				resolve(row.seq);
			})
		});
	}

	static findById(id){
		return new Promise((resolve, reject)=>{
			let getObjectbyIdQuery = `select Contacts.id, Contacts.name, Contacts.company, Contacts.telephone, Contacts.email, group_concat(Groups.name, ",") as MemberOfGroup
		from Contacts JOIN Contacts_Groups JOIN Groups 
		ON Contacts.id = Contacts_Groups.contactId AND Groups.id = Contacts_Groups.groupId 
		WHERE id = "${id}" GROUP By Contacts.name;`;
			
			db.get(getObjectbyIdQuery,(err, row)=>{
				if(err)reject(err);
				let convertedObj = Object.assign(new Contact(), row);
				resolve(convertedObj);
			});
		});
	}
}

module.exports = Contact;

// select Contacts.id, Contacts.name, Contacts.company, Contacts.telephone, Contacts.email, group_concat(Groups.name, ", ") as MemberOfGroup from Contacts JOIN Contacts_Groups JOIN Groups ON Contacts.id = Contacts_Groups.contactId AND Groups.id = Contacts_Groups.groupId where Contacts.id = "1" GROUP By Contacts.name ;