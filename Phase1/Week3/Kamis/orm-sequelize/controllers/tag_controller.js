const Model =require("../models/");
const View = require("../views/view.js");

class TagControlller{
	constructor(){

	}

	static add(name){
		Model.Tag
			.create({
				name:name
			})
			.then(response=>View.showTableOneLine(response.get({plain:true})))
			.catch(View.printMessage);
	}

	static read_one(TagId){
		Model.Tag
			.findById(TagId)
			.then(response=>View.showTableOneLine(response.get({plain:true})))
			.catch(View.printMessage);
	}

	static read_all(){
		Model.Tag
			.findAll()
			.then(View.printMessage)
			.catch(View.printMessage);
	}

	static update(newValue,id){
		Model.Tag
			.update(
				{name:newValue},
				{returning: true, where: {id:id}}
			)
			.then(response=>View.showTableOneLine(response.get({plain:true})))
			.catch(View.printMessage);

	}

	static delete(idTag){

		Model.Tag
			.destroy(
				{where: {id : idTag}}
			)
			.then(View.printMessage)
			.catch(View.printMessage);

	}

	static lastCreated(){
		Model.Tag
			.findOne(
				{order:[ [ 'createdAt', 'DESC' ]]}
			)
			.then(response=>View.showTableOneLine(response.get({plain:true})))
			.catch(View.printMessage);
	}

	static lastUpdated(){
		Model.Tag
			.findOne(
				{order:[ [ 'updatedAt', 'DESC' ]]}
			)
			.then(response=>View.showTableOneLine(response.get({plain:true})))
			.catch(View.printMessage);
	}

	static findOrCreate(idTag){
		Model.Tag
			.findOrCreate(
				{where: {id:idTag},
					defaults: 
					{
						name: "Unknown"
					}
				}
			)
			.then(response=>View.showTableOneLine(response.get({plain:true})))
			.catch(View.printMessage);

	}

	static count(){
		Model.Tag
			.findAndCountAll()
			.then((response)=> View.printMessage(response.count))
			.catch(View.printMessage);
	}
}

module.exports = TagControlller;