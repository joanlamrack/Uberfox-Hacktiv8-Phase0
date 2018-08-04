const DataDealer = require("./model.js");
const DataViewer = require("./view.js");


class DataController{
	constructor(){
	}

	static help(){
		DataViewer.helpGeneral();
	}

	static printMessage(strMsg){
		DataViewer.printMessage(strMsg);
	}

	static logout(){
		DataDealer.logout();
	}

	static login(username, password){
		DataDealer.verifyLogin(username, password, (loginStatus) => {
			DataViewer.printMessage(loginStatus);
		});
	}

	static addPatient(...params){
		DataDealer.addNewPatient(params,(x)=>{
			DataViewer.printMessage(x);
		});
	}

	static register(params){
		DataDealer.addNewEmployee(params);
	}
}

module.exports = DataController;