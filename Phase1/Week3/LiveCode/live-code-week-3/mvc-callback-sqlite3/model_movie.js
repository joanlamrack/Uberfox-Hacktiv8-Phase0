const db = require("./db.js");

class Movie{
	constructor(){

	}

	static add(name, released_year, genre, rating, prodHouseId, addCallback){

		if(rating>5 || rating < 1){
			addCallback("Invalid rating")
		}
		else if(!name || !released_year || !genre || !rating || !prodHouseId){
			addCallback("Invalid parameters");
		}
		else{
			let queryCheckProductionHouse = `select * from ProductionHouses where id = ${prodHouseId};`;
			
			db.get(queryCheckProductionHouse, (err, row)=>{
				if(err)addCallback("Production House not found");
				if(!row)addCallback("Production House not found");
				else{
					let query = `INSERT INTO Movies 
					(name,released_year,genre,rating,prodHouseId)
					VALUES 
					("${name}",${released_year},"${genre}",${rating},${prodHouseId});`;

					db.run(query, function(err){
						if(err)addCallback(err);
						else addCallback(`Successfully added a movie with ID: ${this.lastID}`);
					});
				}
			});

			
		}
		
	}

	static delete(id, deleteCallback){
		if(!id){
			deleteCallback("Invalid parameters");
		}else{
			let query = `DELETE FROM Movies WHERE id = ${id};`

			db.run(query, function(err){
				if(err)deleteCallback("Data Not Found");
				else if(this.changes)deleteCallback(`Successfully deleted an movie with ID: ${id}`);
				else deleteCallback(`Data not Found`);
			});
		}
		
	}

	static showRecommendations(showCallback){
		let query = `SELECT Movies.name, Movies.genre, Movies.rating, ProductionHouses.name_prodHouse as prodName
		FROM Movies JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id
		ORDER BY rating DESC LIMIT 3`;

		db.all(query, (err, rows)=>{
			if(err)showCallback(err);
			else if(!rows.length)showCallback("Tidak ada rekomendasi");
			else showCallback(rows);
		});

	}
}

module.exports = Movie;