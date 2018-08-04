const Model =require("../models/");
const View = require("../views/view.js");

class AuthorControlller{
	constructor(){

	}

	static add(first_name, last_name, religion, gender, age){
		Model.Author
			.create({
				first_name:first_name,
				last_name:last_name,
				religion:religion,
				gender:gender,
				age:age
			})
			.then(response=>View.showTableOneLine(response.get({plain:true})))
			.catch(View.printMessage);
	}

	static read_one(AuthorId){
		Model.Author
			.findById(AuthorId)
			.then(response=>View.showTableOneLine(response.get({plain:true})))
			.catch(View.printMessage);
	}

	static read_all(){
		Model.Author
			.findAll()
			.then(View.printMessage)
			.catch(View.printMessage);
	}

	static update(columnNameToUpdate,newValue,id){
		Model.Author
			.update(
				{[columnNameToUpdate]:newValue},
				{returning: true, where: {id:id}}
			)
			.then(View.printMessage)
			.catch(View.printMessage);

	}

	static delete(idAuthor){

		Model.Author
			.destroy(
				{where: {id : idAuthor}}
			)
			.then(View.printMessage)
			.catch(View.printMessage);

	}

	static lastCreated(){
		Model.Author
			.findOne(
				{order:[ [ 'createdAt', 'DESC' ]]}
			)
			.then(View.showTableOneLine)
			.catch(View.printMessage);
	}

	static lastUpdated(){
		Model.Author
			.findOne(
				{order:[ [ 'updatedAt', 'DESC' ]]}
			)
			.then(View.showTableOneLine)
			.catch(View.printMessage);
	}

	static findOrCreate(idAuthor){
		Model.Author
			.findOrCreate(
				{where: {id:idAuthor},
					defaults: 
					{
						first_name: "John",
						last_name: "Doe",
						religion: "none",
						gender: "none",
						age: 0
					}
				}
			)
			.then(View.showTableOneLine)
			.catch(View.printMessage);

	}

	static count(){
		Model.Author
			.findAndCountAll()
			.then((response)=> View.printMessage(response.count))
			.catch(View.printMessage);
	}
}

module.exports = AuthorControlller;