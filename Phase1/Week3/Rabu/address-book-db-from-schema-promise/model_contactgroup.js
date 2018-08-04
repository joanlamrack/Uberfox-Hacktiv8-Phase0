const db = require("./db.js");

class Contact_Group{
	constructor(id, contactId, groupId){
		this.id = id || 0;
		this.contactId = contactId;
		this.groupId = groupId;
		this.tableName = "Contacts_Groups";
	}
	
	save(){
		return new Promise((resolve, reject)=>{
			if(!this.id){
				let query = `INSERT INTO ${this.tableName} (contactId, groupId) 
					VALUES (
					"${this.contactId}",
					"${this.groupId}"
					);`;

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
					SET contactId = "${this.contactId}",
					groupId = "${this.groupId}"
					WHERE id = "${this.id}"`;
				
				db.run(query, (err)=>{
					if(err)reject(err)
					else resolve("Data Berhasil di update");
				});
			}
			else{
				reject("No Such Variable name");
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
			let getObjectbyIdQuery = `select * FROM ${this.tableName} WHERE id = "${id}";`;

			db.get(getObjectbyIdQuery,(err, row)=>{
				if(err)reject(err);
				let convertedObj = Object.assign(new Contact_Group(), row);
				resolve(convertedObj);
			});
		});
	}
}

module.exports = Contact_Group;