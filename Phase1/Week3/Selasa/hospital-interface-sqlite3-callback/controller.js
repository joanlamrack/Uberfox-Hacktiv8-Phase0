const DataViewer = require("./view.js");
const DataDealer = require("./model.js");

class DataController{
	constructor(){}

	static login(username, password){
		DataDealer.login(username, password, DataViewer.printMessage);
	}

	static logout(){
		DataDealer.logout(DataViewer.printMessage);
	}

	static register(param){
		DataDealer.addEmployee(param, DataViewer.printMessage);
	}

	static addPatient(param){
		DataDealer.addPatient(param, DataViewer.printMessage);
	}

	static help(){
		DataViewer.help();
	}
}

module.exports = DataController;

//DataController.register(["daniel3", "daniel3", "dokter", "12345"]);
//DataController.addPatient(["daniel", "saldinata", "male", "23", "batuk", "batuk"]);
//DataController.logout();
//DataController.login("joanlamrack", "12345");
//DataController.login("eri", "12345");
//DataController.login("joanlamrack", "1245");