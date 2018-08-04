const db = require("./db.js");
const sleep = require("sleep");
class Contact{
	constructor(name, company, telephone, email){
		this.name = name;
		this.company = company;
		this.telephone = telephone;
		this.email = email;
		this.tableName = "Contacts";
	}

	save(){
		let query = `INSERT INTO ${this.tableName} (name, company, telephone, email) VALUES ("${this.name}", "${this.company}", "${this.telephone}", "${this.email}");`;
		let lastId_query = `SELECT seq FROM sqlite_sequence where name = "${this.tableName}"`;
		db.serialize(()=>{
			db.run(query);
			db.get(lastId_query, (err, row)=>{
				this.id = row.seq;
				console.log("now", this);
			})
			console.log("after", this);
		});
	}

	update(){
		let query = `UPDATE ${this.tableName}`
	}
}

//module.exports = Contact;
let contact = new Contact("eri", "hahah", "01923123", "hafafasddjkdjkdf");
contact.save();

let contact2 = new Contact("eri", "hahah", "01923123", "hafafasddjkdjkdf");
contact2.save();
console.log(contact.id);