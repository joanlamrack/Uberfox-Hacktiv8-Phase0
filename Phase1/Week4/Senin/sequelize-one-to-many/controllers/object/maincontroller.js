const SubjectController = require("./subjectcontroller.js");
const TeacherController = require("./teachercontroller.js");

class MainController{
	constructor(){

	}

	static mainMenu(mainMenuOption, secondaryCommand, commandArgsInArray){
		switch(mainMenuOption){
		case "teachers": return MainController.childMenu(TeacherController, secondaryCommand, commandArgsInArray);
		case "subjects": return MainController.childMenu(SubjectController, secondaryCommand, commandArgsInArray);
		}
	}

	static childMenu(controllerToExecute, secondaryCommand, commandArgsInArray){
		switch(secondaryCommand){
		case "add": return controllerToExecute.add(commandArgsInArray);
		case "read_one": return controllerToExecute.read_one(commandArgsInArray);
		case "read_all": return controllerToExecute.read_all();
		case "edit": return controllerToExecute.update(commandArgsInArray);
		case "delete": return controllerToExecute.delete(commandArgsInArray);
		case "getKeys":return controllerToExecute.getKeys();
		}
	} 
}

module.exports = MainController.mainMenu;
