const ArticleControllers = require("./article_controller.js");
const AuthorControllers= require("./author_controller.js");
const TagControllers = require("./tag_controller.js");

class MainController{
	constructor(){

	}

	static mainMenu(mainMenuOption, secondaryCommand, commandArgs){
		switch(mainMenuOption){
		case "author":MainController.childMenu(AuthorControllers, secondaryCommand, commandArgs);break;
		case "tag":MainController.childMenu(TagControllers, secondaryCommand, commandArgs);break;
		case "article":MainController.childMenu(ArticleControllers, secondaryCommand, commandArgs);break;
		}
	}

	static childMenu(controllerToExecute, secondaryCommand, commandArgs){
		switch(secondaryCommand){
		case "add":controllerToExecute.add(...commandArgs);break;
		case "read_one":controllerToExecute.read_one(commandArgs);break;
		case "read_all":controllerToExecute.read_all();break;
		case "update":controllerToExecute.update(...commandArgs);break;
		case "delete":controllerToExecute.delete(commandArgs);break;
		case "lastUpdated":controllerToExecute.lastUpdated();break;
		case "lastEntry":controllerToExecute.lastCreated();break;
		case "count":controllerToExecute.count();break;
		case "findOrCreate":controllerToExecute.findOrCreate(commandArgs);break;
		}
	} 
}

module.exports=MainController.mainMenu;