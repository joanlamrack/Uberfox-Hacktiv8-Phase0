const Controller = require("./controller.js");

let [typeCommand, command, ...commandArgs] = process.argv.slice(2);
switch(typeCommand+" "+command){
	case "prodHouse add": Controller.prodHouseAdd(...commandArgs);break;
	case "movie add":Controller.movieAdd(...commandArgs);break;
	case "movie delete":Controller.movieDelete(commandArgs);break;
	case "movie showRecommendations":Controller.movieShowRecommendations();break;
}