const routes = require("express").Router();
const controller = require("../controllers/request/credential_requestcontroller.js");

routes.get("/login", controller.login_get);

routes.post("/login", controller.login_post);

routes.get("/register", controller.register_get);

routes.get("/register", controller.register_post);

module.exports=routes;