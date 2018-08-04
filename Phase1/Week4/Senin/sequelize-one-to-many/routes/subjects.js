const routes = require("express").Router();
const controller = require("../controllers/request/subject_requestcontroller.js");

routes.get("/", controller.viewall_get);

routes.get("/add", controller.add_get);

routes.post("/add", controller.add_post);

routes.get("/delete/:id", controller.delete_get);

routes.get("/edit/:id", controller.edit_get);

routes.post("/edit/:id",controller.edit_post);

module.exports = routes;