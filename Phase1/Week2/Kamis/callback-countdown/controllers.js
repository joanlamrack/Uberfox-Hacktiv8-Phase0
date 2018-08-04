const { displayCountdown } = require("./views");

const timer = seconds => {
	let countDownTimeLimit = seconds;
	let intervalId = setInterval(function(){
		displayCountdown(countDownTimeLimit);
		countDownTimeLimit--;
		if(countDownTimeLimit===0){
			clearInterval(intervalId);
			displayCountdown(0);
		} 
	}, 1000);
};

module.exports = {
	timer
};
