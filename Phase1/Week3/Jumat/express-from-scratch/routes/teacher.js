const routes = require("express").Router();


let teachers = [{ "id": 1, "first_name": "Mamie", "last_name": "Lowle", "email": "mlowle0@patch.com", "gender": "Female", "lesson": "Accounting" }, { "id": 2, "first_name": "Georg", "last_name": "Cisneros", "email": "gcisneros1@imdb.com", "gender": "Male", "lesson": "Product Management" }, { "id": 3, "first_name": "Johnny", "last_name": "O'Giany", "email": "jogiany2@amazon.de", "gender": "Male", "lesson": "Legal" }, { "id": 4, "first_name": "Kiel", "last_name": "Stapele", "email": "kstapele3@theatlantic.com", "gender": "Male", "lesson": "Engineering" }, { "id": 5, "first_name": "Devi", "last_name": "Britney", "email": "dbritney4@yale.edu", "gender": "Female", "lesson": "Sales" }, { "id": 6, "first_name": "Kipper", "last_name": "Lanaway", "email": "klanaway5@weather.com", "gender": "Male", "lesson": "Marketing" }, { "id": 7, "first_name": "Siward", "last_name": "Artois", "email": "sartois6@soup.io", "gender": "Male", "lesson": "Sales" }, { "id": 8, "first_name": "Vail", "last_name": "Minghetti", "email": "vminghetti7@biglobe.ne.jp", "gender": "Male", "lesson": "Accounting" }, { "id": 9, "first_name": "Townie", "last_name": "Romain", "email": "tromain8@hibu.com", "gender": "Male", "lesson": "Sales" }, { "id": 10, "first_name": "Gerrie", "last_name": "Notley", "email": "gnotley9@homestead.com", "gender": "Male", "lesson": "Sales" }]

//profile
routes.get("/", function(req,res){
	res.render("teacher", {teachers:teachers});
})


module.exports = routes;