class Robot{
	constructor(name, purpose){
		this.name = name;
		this.purpose = purpose;
	}
}

class WallE extends Robot{
	constructor(){
		super("Wall-E","worker")
	}
	
	work(){
		console.log("Wall-E cleans the planet");
	}
}

class BayMax extends Robot{
	constructor(){
		super("Baymax", "medic")
	}

	heal(){
		console.log("Hi, I am BayMax, how may I help you?");
	}
}

class Autobot extends Robot{
	constructor(){
		super("Autobot","defender")
	}

	defend(){
		console.log("AutoBot, let's roll!");
	}
}

module.exports = {
	Autobot : Autobot,
	BayMax : BayMax,
	WallE : WallE
};