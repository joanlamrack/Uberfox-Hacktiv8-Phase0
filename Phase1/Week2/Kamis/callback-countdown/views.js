const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
	//clearing purposes
	clear();
	console.clear();
	process.stdout.write('\033c\033[3J');
	console.log(chalk.cyan(figlet.textSync("Countdown App")));
	console.log(chalk.red(figlet.textSync(`${(Math.floor(seconds/60)<10?0:"")}${Math.floor(seconds/60)}:${(seconds%60<10?0:"")}${seconds%60}`)));
};

module.exports = { displayCountdown };
