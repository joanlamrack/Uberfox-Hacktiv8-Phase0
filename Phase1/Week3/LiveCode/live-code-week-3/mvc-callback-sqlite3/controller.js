const ProductionHouse = require("./model_productionhouse.js");
const Movie = require("./model_movie.js");
const View = require("./view.js");

class Controller{
	constructor(){

	}

	static prodHouseAdd(name_prodHouse, origin_city){
		ProductionHouse.add(name_prodHouse, origin_city,View.printMessage);
	}

	static movieAdd(name, released_year, genre, rating, prodHouseId){
		Movie.add(name, released_year, genre, rating, prodHouseId, View.printMessage);
	}

	static movieDelete(id){
		Movie.delete(id, View.printMessage);
	}

	static movieShowRecommendations(){
		Movie.showRecommendations((response)=>{
			if(typeof response !== "object")View.printMessage(response);
			else View.printAllRecommendations(response);
		});
	}
}

module.exports = Controller;