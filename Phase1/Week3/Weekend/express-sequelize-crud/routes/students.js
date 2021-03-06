const routes = require("express").Router();
const controller = require("../controllers/maincontroller.js");
let section = "Student";

//profile
routes.get("/", function(req,res){
	controller(`${section.toLowerCase()}s`,"read_all")
		.then((alldatas)=>{
			res.render("viewall", {
				listdata:alldatas.map(t=>t.dataValues),
				tableHeaders:controller(`${section.toLowerCase()}s`,"getKeys"),
				title:`${section}s`,
				obj:section});
		})
		.catch((err)=>{
			res.render("error", {err:err});
		});
});

routes.get("/add", function(req,res){
	res.render("form", {
		section:`${section}s`,
		actionurl:"add",
		action:"Add",
		keys:controller(`${section.toLowerCase()}s`,"getKeys"),
		value:Array(controller(`${section.toLowerCase()}s`,"getKeys").length),
	});
	
});

routes.post("/add", function(req,res){
	controller(`${section.toLowerCase()}s`,"add",Object.values(req.body))
		.then((response)=>{
			res.redirect(`/${section.toLowerCase()}s`);
		})
		.catch((err)=>{
			res.render("error", {err:err});
		});

});

routes.get("/delete/:id", function(req,res){
	controller(`${section.toLowerCase()}s`,"delete",req.params.id)
		.then((response)=>{
			res.redirect(`/${section.toLowerCase()}s`);
		})
		.catch((err)=>{
			res.render("error", {err:err});
		});
});

routes.get("/edit/:id",function(req,res){
	controller(`${section.toLowerCase()}s`,"read_one",req.params.id)
		.then((currentdata)=>{
			res.render("form",{
				section:`${section}s`,
				actionurl:currentdata.dataValues.id,
				action:"Edit",
				keys:controller(`${section.toLowerCase()}s`,"getKeys"),
				value:Object.values(currentdata.dataValues)
			});
		})
		.catch((err)=>{
			res.render("error", {err:err});
		});
});

routes.post("/edit/:id",function(req,res){
	//res.send(req.params);
	controller(`${section.toLowerCase()}s`,"edit",[...Object.values(req.body),req.params.id])
		.then((response)=>{
			res.redirect(`/${section.toLowerCase()}s`);
		})
		.catch((err)=>{
			res.render("error", {err:err});
		});
	
});


module.exports = routes;