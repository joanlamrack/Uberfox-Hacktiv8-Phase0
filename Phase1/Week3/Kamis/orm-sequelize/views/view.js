class View{
	constructor(){

	}

	static printMessage(strMessage){
		console.log(strMessage);
	}
	
	static showTableOneLine(Obj){
		this.printMessage(Obj);
	}
}

module.exports = View;