//your code here
const db = require("./db");
const query_tables = [
	`CREATE TABLE Politicians (
		politicianId	INTEGER PRIMARY KEY AUTOINCREMENT,
		name	VARCHAR(30),
		party	VARCHAR(1),
		location	VARCHAR(2),
		grade_current	REAL
	);`,
	`CREATE TABLE Voters (
		voterId	INTEGER PRIMARY KEY AUTOINCREMENT,
		first_name	VARCHAR(30),
		last_name	VARCHAR(30),
		gender	VARCHAR(6),
		age	INTEGER
	);`,
	`CREATE TABLE Votes (
		votesId INTEGER PRIMARY KEY AUTOINCREMENT,
		voterId	INTEGER,
		politicianId	INTEGER,
		FOREIGN KEY(politicianId) REFERENCES Politicians(politicianId),
		FOREIGN KEY(voterId) REFERENCES Voters(voterId)
	);`
];

for(let query of query_tables){
	db.run(query,(err)=>{
		console.log(err);
	});
}




