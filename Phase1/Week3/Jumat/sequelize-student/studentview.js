class StudentView{
	constructor(){

	}
	
	static printMessage(strMessage){
		console.log(strMessage);
	}

	static printTable(arrofObj){
		console.table(arrofObj);
	}

	static help(){
		this.printMessage("node index createStudent <input args with space separator>");
		this.printMessage("node index deleteStudent <id student>");
		this.printMessage("node index getAllFemaleStudent");
		this.printMessage("node index getStudentById <id>");
		this.printMessage("node index");
	}

	static printErr(err){
		StudentView.printMessage(err.message);
	}
}

module.exports= StudentView;