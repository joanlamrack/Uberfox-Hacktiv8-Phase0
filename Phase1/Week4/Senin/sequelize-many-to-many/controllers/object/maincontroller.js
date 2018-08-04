const SubjectController = require("./subjectcontroller.js");
const TeacherController = require("./teachercontroller.js");
const StudentController = require("./studentcontroller.js");
const EnrollmentController = require("./enrollmentcontroller.js");
const CredentialsController = require("./credentialcontroller.js");

class MainController{
	constructor(){

	}

	static mainMenu(mainMenuOption, secondaryCommand, commandArgsInArray){
		switch(mainMenuOption){
		case "teachers": return MainController.childMenu(TeacherController, secondaryCommand, commandArgsInArray);
		case "subjects": return MainController.childMenu(SubjectController, secondaryCommand, commandArgsInArray);
		case "students": return MainController.childMenu(StudentController, secondaryCommand, commandArgsInArray);
		case "enrollments": return MainController.childMenu(EnrollmentController, secondaryCommand, commandArgsInArray);
		case "credentials": return MainController.childMenu(CredentialsController, secondaryCommand, commandArgsInArray);
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
		case "getModel":return controllerToExecute.getModel();
		}
	} 
}

module.exports = MainController.mainMenu;
