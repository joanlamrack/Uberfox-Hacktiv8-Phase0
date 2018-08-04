class DataViewer{
	constructor(){
	}

	static printMessage(strMessage){
		console.log(strMessage);
	}
	
	static helpGeneral(){
		this.printMessage("node index register <username> <password> <role:[dokter|admin|officeboy|receptionist]>");
		this.printMessage("node index login <username> <password>");
		this.printMessage("node index logout");
		this.printMessage("node index addPatient <nama pasien> <diagnosis> #dokter");
	}
}

module.exports = DataViewer;