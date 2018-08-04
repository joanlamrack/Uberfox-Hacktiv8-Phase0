const app = require("express")();
const express = require("express");
const routes = require("./routes");
const body = require("body-parser");
const GradeHelper = require("./helpers/mainhelper.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");


app.use((req,res,next)=>{
	res.locals.helper = GradeHelper;
	next();
});
app.use(body.urlencoded({extended:true}));
app.use(body.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());
app.listen(3000);

app.use(session({
	key: "user_sid",
	secret: "somerandonstuffs",
	resave: false,
	saveUninitialized: false,
	cookie: {
		expires: 600000
	}
}));



//app.use(sessionChecker);

app.use((req, res, next) => {
	//console.log("ini masuk")
	if (req.cookies.user_sid && !req.session.user) {
		res.clearCookie("user_sid");        
	}
	next();
});

app.use("/", routes);


