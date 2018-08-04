const Loan = require("../models").Loan;
const Book = require("../models").Book;

class LoanRequestController{
	constructor(){

	}

	//view all data
	static viewallLoans_get(req,res){
		Loan.findAll({
			include:[Book]
		})
			.then((AllLoans)=>{
				console.log(AllLoans)
				Book.findAll({
					where: {
						availableToBorrow:true
					},
					order:[
						["title", "ASC"]
					]
				})
					.then((BookList)=>{
						res.render("viewloan",{
							title:"Loans",
							err:null,
							LoanList:AllLoans,
							BookList
						});
					})
					.catch((err)=>{
						res.render("error",{err});
					});
				
			})
			.catch((err)=>{
				res.render("error", {err});
			});
	}

	//create Loan baru
	static viewallLoans_post(req,res){
		Loan.create({
			borrowerName: req.body.borrowerName,
			borrowerGender: req.body.borrowerGender,
			dueDate: new Date(req.body.dueDate)
		})
			.then((Loan)=>{
				return Book.update({
					availableToBorrow:false,
					LoanId:req.body.bookId
				},
				{returning: true, where: {id:req.body.bookId}}
				);
			})
			.then(()=>{
				res.redirect("/loans");
			})
			.catch((err)=>{
				res.redirect("/loans");
			});
	}

	static returnLoan_get(req,res){
		Loan.update(
			{
				returned:true
			},
			{returning: true, where: {id:req.params.id}}
		)
			.then((Loan)=>{
				Book.update({
					availableToBorrow:true
				},
				{returning: true, where: {LoanId:Loan.id}});
			})
			.catch((err)=>{
				res.render("error", {err});
			});
	}
	


}

module.exports=LoanRequestController;