const Book = require("../models").Book;


class BookRequestController{
	constructor(){

	}

	//view all data
	static viewallBooks_get(req,res){
		Book.findAll({
			order:[
				['createdAt', 'DESC']
			]
		})
			.then((AllBooks)=>{
				res.render("view",{
					title:"Books",
					err:null,
					bookList:AllBooks
				});
			})
			.catch((err)=>{
				res.render("error", {err});
			});
	}

	//create book baru
	static viewallBooks_post(req,res){
		Book.create({
			title: req.body.title,
			desciption: req.body.description,
			author: req.body.author
		})
			.then(()=>{
				res.render("view",{
					err:null
				});
			})
			.catch((err)=>{
				Book.findAll({
					order:[
						['createdAt', 'DESC']
					]
				})
					.then((AllBooks)=>{
						res.render("view",{
							title:"Books",
							err:err,
							bookList:AllBooks
						});
					})
					.catch((err)=>{
						res.render("error", {err});
					});
			});
	}

	static editBook_get(req,res){
		Book.findById(req.params.id)
			.then((book)=>{
				res.render("editbook",{
					bookData:book.dataValues,
					err:null,
					title:"Edit Book"
				});
			})
			.catch((err)=>{
				res.render("error", {err});
			});
	}

	static editBook_post(req,res){	
		Book.update(
			{
				title: req.body.title,
				desciption: req.body.description,
				author: req.body.author
			},
			{returning: true, where: {id:req.params.id}}
		)
			.then((Book)=>{
				res.redirect("/books");
			})
			.catch((err)=>{
				res.render("error", {err});
			});
	}

	static deleteBook(req,res){
		Book.destroy({
			where:{
				id:req.params.id
			}
		})
			.then((book)=>{
				res.redirect("/books");
			})
			.catch((err)=>{
				res.render("error",{err});
			});
	}

	


}

module.exports=BookRequestController;