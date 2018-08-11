const routes = require("express").Router();
const BookRequestController = require("../controllers/books.js");
const LoanRequestController = require("../controllers/loans.js");

//profile

routes.get("/", (req, res) => {
	res.redirect("/books");
});
routes.get("/books", BookRequestController.viewallBooks_get);
routes.post("/books", BookRequestController.viewallBooks_post);
routes.get("/books/:id/edit", BookRequestController.editBook_get);
routes.post("/books/:id/update", BookRequestController.editBook_post);
routes.get("/books/:id/delete", BookRequestController.deleteBook);

routes.get("/loans", LoanRequestController.viewallLoans_get);
routes.post("/loans", LoanRequestController.viewallLoans_post);
routes.get("/loans/:id/return", LoanRequestController.returnLoan_get);

module.exports = routes;
