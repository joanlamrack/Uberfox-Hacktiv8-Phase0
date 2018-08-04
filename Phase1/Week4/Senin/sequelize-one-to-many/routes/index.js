const routes = require("express").Router();
//const students = require("./students.js");
const teachers = require("./teachers.js");
const subjects = require("./subjects.js");

//routes.use("/students", students);
routes.use("/teachers", teachers);
routes.use("/subjects", subjects);

//profile
routes.get("/", function (req,res){
	res.render("index");
});


module.exports = routes;