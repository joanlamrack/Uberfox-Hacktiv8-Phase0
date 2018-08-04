const MainMenu = require("../object/maincontroller.js");

class RequestController{
	constructor(){

	}

	static viewall_get(section,req,res){
		MainMenu(`${section.toLowerCase()}s`,"read_all")
			.then((alldatas)=>{
				res.render("viewall", {
					listdata:alldatas.map(t=>t.dataValues),
					tableHeaders:MainMenu(`${section.toLowerCase()}s`,"getKeys"),
					title:`${section}s`,
					obj:section
				});
			})
			.catch((err)=>{
				res.render("error", {err:err});
			});
	}

	static add_get(section, req,res){
		res.render("form", {
			section,
			action: "Add",
			keys:MainMenu(`${section.toLowerCase()}s`,"getKeys"),
			actionurl:"add",
			value:Array(MainMenu(`${section.toLowerCase()}s`,"getKeys").length),
			err:undefined
		});
	}

	static add_post(section,req,res){
		console.log("request---------------",Object.values(req.body));
		MainMenu(`${section.toLowerCase()}s`,"add",Object.values(req.body))
			.then((response)=>{
				res.redirect(`/${section.toLowerCase()}s`);
			})
			.catch((err)=>{
				res.render("form", {
					section,
					action: "Add",
					keys:MainMenu(`${section.toLowerCase()}s`,"getKeys"),
					actionurl:"add",
					value:Object.values(req.body),
					err:err
				});
			});
	}

	static delete_get(section, req, res){
		MainMenu(`${section.toLowerCase()}s`,"delete",req.params.id)
			.then((response)=>{
				res.redirect(`/${section.toLowerCase()}s`);
			})
			.catch((err)=>{
				res.render("error", {err:err});
			});
	}

	static edit_get(section, req, res){
		console.log("current", req.params.id)
		MainMenu(`${section.toLowerCase()}s`,"read_one",[req.params.id])
			.then((currentdata)=>{
				console.log("current", currentdata)
				res.render("form",{
					section,
					action: "Edit",
					keys:MainMenu(`${section.toLowerCase()}s`,"getKeys"),
					actionurl:req.params.id,
					value:Object.values(currentdata.dataValues)
				});
			})
			.catch((err)=>{
				res.render("error", {err:err});
			});
	}

	static edit_post(section,req,res){
		MainMenu(`${section.toLowerCase()}s`,"edit",[...Object.values(req.body),req.params.id])
			.then((response)=>{
				res.redirect(`/${section.toLowerCase()}s`);
			})
			.catch((err)=>{
				res.render("error", {err:err});
			});
	}

}

module.exports = RequestController;