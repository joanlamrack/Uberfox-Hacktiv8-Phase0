const db = require("./db.js");

class ProductionHouse{
	constructor(){

	}

	static add(name_prodHouse, origin_city, addCallback){
		if(!name_prodHouse || !origin_city){
			addCallback("Parameter yang di berikan kurang");
		}
		else{
			let query = `INSERT INTO ProductionHouses 
			(name_prodHouse, origin_city)
			VALUES ("${name_prodHouse}","${origin_city}");`;

			db.run(query, function (err){
				if(err)addCallback(err);
				else addCallback(`Successfully added a production house with ID: ${this.lastID}`);
			});
		}
	}
}

module.exports = ProductionHouse;