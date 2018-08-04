let imports = require("./robots.js");
let Autobot = imports.Autobot;
let WallE = imports.WallE;
let BayMax = imports.BayMax;

class RobotFactory{
	constructor(){

	}

	static produceRobot(robotName, quantity){
		let batch = Array(quantity);
		switch (robotName) {
			case 'wall-e': batch.fill(new WallE());break;
			case 'baymax': batch.fill(new BayMax());break;
			case 'autobot': batch.fill(new Autobot());break;
		}
		return batch;
	}
}

module.exports = RobotFactory;