const routes = require("express").Router();
const students = require("./students.js");
const teachers = require("./teachers.js");
const subjects = require("./subjects.js");
const auths = require("./auth.js");

routes.use("/students", students);
routes.use("/teachers", teachers);
routes.use("/subjects", subjects);
routes.use("/auth",auths);


let sessionChecker = (req, res, next) => {

	req.session.user = 'john doe'
	console.log(req.session.user)

	// console.log(req.cookies.user_sid)


	if (req.session.user) {
		next();
	} else {
		res.redirect("/auth/login");
	}    
};

//profile
routes.get("/", sessionChecker,function (req,res){
	res.render("index");
});



module.exports = routes;