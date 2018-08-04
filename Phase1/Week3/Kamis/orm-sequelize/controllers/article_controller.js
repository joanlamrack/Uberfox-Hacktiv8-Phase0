const Model =require("../models/");
const View = require("../views/view.js");

class ArticleControlller{
	constructor(){

	}

	static add(title, body, authorId, tagId){
		Model.Article
			.create({
				title:title,
				body:body,
				authorId:authorId,
				tagId:tagId
			})
			.then(View.printMessage)
			.catch(View.printMessage);
	}

	static read_one(articleId){
		Model.Article
			.findById(articleId)
			.then(response=>View.showTableOneLine(response.get({plain:true})))
			.catch(View.printMessage);
	}

	static read_all(){
		Model.Article
			.findAll()
			.then(View.printMessage)
			.catch(View.printMessage);
	}

	static update(columnNameToUpdate,newValue,id){
		Model.Article
			.update(
				{[columnNameToUpdate]:newValue},
				{returning: true, where: {id:id}}
			)
			.then(View.printMessage)
			.catch(View.printMessage);

	}

	static delete(idArticle){

		Model.Article
			.destroy(
				{where: {id : idArticle}}
			)
			.then(View.printMessage)
			.catch(View.printMessage);

	}

	static lastCreated(){
		Model.Article
			.findOne(
				{order:[ [ 'createdAt', 'DESC' ]]}
			)
			.then(View.showTableOneLine)
			.catch(View.printMessage);
	}

	static lastUpdated(){
		Model.Article
			.findOne(
				{order:[ [ 'updatedAt', 'DESC' ]]}
			)
			.then(View.showTableOneLine)
			.catch(View.printMessage);
	}

	static findOrCreate(idArticle){
		Model.Article
			.findOrCreate(
				{where: {id:idArticle},
					defaults: 
					{
						title: "Unknown",
						body: "empty",
						authorId: 1,
						tagId: 1
					}
				}
			)
			.then(View.showTableOneLine)
			.catch(View.printMessage);

	}

	static count(){
		Model.Article
			.findAndCountAll()
			.then((response)=> View.printMessage(response.count))
			.catch(View.printMessage);
	}

}

module.exports = ArticleControlller;