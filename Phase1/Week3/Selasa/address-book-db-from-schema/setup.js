const db = require("./db.js");
let table_query= 
[
	`CREATE TABLE IF NOT EXISTS Contacts(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(30),
	company TEXT,
	telephone VARCHAR(30),
	email TEXT UNIQUE
	);`
	,

	`CREATE TABLE IF NOT EXISTS Groups(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(30)
	);`

	,

	`CREATE TABLE Contacts_Groups (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	contactId INTEGER,
	groupId	INTEGER,
	FOREIGN KEY(groupId) REFERENCES Groups(groupId),
	FOREIGN KEY(contactId) REFERENCES Contacts(contactId)
	);`
];

for(let query of table_query){
	db.serialize(function(){
		db.run(query, (err)=>{
			if(err) console.log(error);
		});
	});
}