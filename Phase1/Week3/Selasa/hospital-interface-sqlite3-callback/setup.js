//your code here
const db = require("./db");
const query_tables = [
	`CREATE TABLE IF NOT EXISTS Employees (
		employeeId	INTEGER PRIMARY KEY AUTOINCREMENT,
		name	VARCHAR(30),
		username VARCHAR(30),
		position	VARCHAR(30),
		password VARCHAR(30)
		
	);`,
	`CREATE TABLE IF NOT EXISTS Patients (
		patientId	INTEGER PRIMARY KEY AUTOINCREMENT,
		first_name	VARCHAR(30),
		last_name	VARCHAR(30),
		gender	VARCHAR(6),
		age	INTEGER,
		diagnoses TEXT
	);`,
	`CREATE TABLE IF NOT EXISTS LoginSessions (
		loginSessionId INTEGER PRIMARY KEY AUTOINCREMENT,
		employeeId	INTEGER,
		loginDate	VARCHAR(30),
		active INTEGER
	);`
];

for(let query of query_tables){
	db.serialize(()=>{
		db.run(query,(err)=>{
			console.log(err);
		});
	});
}




