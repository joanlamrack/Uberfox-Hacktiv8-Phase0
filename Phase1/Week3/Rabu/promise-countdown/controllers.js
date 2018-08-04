const { displayCountdown } = require("./views");

const timer = seconds => {
	timePromise(seconds)
		.then((response)=>timer(response))
		.catch((response)=>{});
};

function timePromise(seconds){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			displayCountdown(seconds);
			if(seconds<=0){
				reject();
			}
			else{
				resolve(seconds-1);
			}
		},1000);
		
	});
}

module.exports = {
	timer
};
