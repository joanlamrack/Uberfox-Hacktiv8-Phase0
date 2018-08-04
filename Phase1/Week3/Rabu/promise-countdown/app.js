const { timer } = require("./controllers");

const main = () => {
	const seconds = parseInt(process.argv[2]) || 10;
	timer(seconds);
};

main();
