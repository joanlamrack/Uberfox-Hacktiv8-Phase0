"use strict";

class Person {
	constructor(id=0, first_name, last_name, email, phone, created_at=new Date()){
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.phone = phone;
		this.created_at = new Date(created_at);
	}
}

class PersonParser {

	constructor(file) {
		this._file = file;
		this._columnNames;
		this.people = file;
		
	}

	set people(file){
		let fs = require("fs");
		let arrayOfPeople = fs.readFileSync(file)
			.toString()
			.split("\n")
			.slice(1)
			.map(x=>new Person(...x.split(",")));
		this._people = arrayOfPeople;
		this._columnNames =fs.readFileSync(file)
			.toString()
			.split("\n")[0];
	}

	get people() {
		return this._people;
	}

	get file(){
		return this._file;
	}

	get size(){
		return this._people.length;
	}

	addPerson(personObj) {
		personObj.id = this.size+1;
		this._people.push(personObj);
		return this.people;
	}

	save(){
		let fs = require("fs");
		let content = [];
		
		for(let person of this.people){
			let buffer = [];
			for(let key in person){
				buffer.push(person[key]);
			}
			content.push(buffer);
		}
		fs.writeFile(this._file, this._columnNames+"\n"+content.join("\n"), "utf8");
	}

}

let parser = new PersonParser("./people.csv");
console.log(parser.people);

console.log(parser.addPerson(new Person("","eri","thiana","joanlamrack@gmail.com","085311906281")));

parser.save();

console.log(`There are ${parser.size} people in the file '${parser.file}'.`);