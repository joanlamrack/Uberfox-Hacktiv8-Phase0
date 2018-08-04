const routes = require("express").Router();

//profile
routes.get("/", function(req,res){
	res.render("student")
})

routes.post("/", function(req,res){
	res.send(req.body)
})




module.exports = routes;