class DataViewer{
	constructor(){

	}

	static printMessage(strMessage){
		console.log(strMessage);
	}

	static help(){
		this.printMessage("node index help");
		this.printMessage("node index login <username> <password>");
		this.printMessage("node index logout");
		this.printMessage("node index addPatient <firstname> <last name> <gender> <age> <diagnosis>");
		this.printMessage("node index register <name> <username> <position> <password>");
	}
}

module.exports = DataViewer;