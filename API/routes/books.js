var express = require('express');
var router = express.Router();
var Authentication = require("../authentification.js");
var Book = require("../models/book");

router
	//get all books
	.get('', Authentication.isLogged,function(req, res){
		Book.findAll().then(books =>{
			res.status = 200;
			res.send(books);
		})
	})

	//get book
	.get('/:id', Authentication.isLogged,function(req, res){
		Book.findByPk(req.params.id).then((book)=>{
			if(book)
				res.send(book);
			//si aucun book n'est trouvé avec cet id
			else{
				res.status = 404;
				res.send();
			}
		})
	})

	//get books by author
	.get('/author/:id', Authentication.isLogged, function(req, res){
		Book.findAll({
			Where: {
				livreAuteur: req.params.id
			}
		}).then((books)=>{
			if(books.length > 0)
				res.send(books)
			else{
				res.status = 404;
				res.send();
			}
		})
	})

	//create book
	.post('', Authentication.isAdmin,function(req, res){
		if(!req.body || !req.body.book){
			res.status(400);
			res.send("missing book parameter");
		}
		else
		{
			var bookToCreate = JSON.parse(req.body.book);
			Book.create(bookToCreate).then(book => {
				res.status = 200;
				res.send(book);
			})
			.catch((error)=>{
				res.status = 500;
				res.send();
			})
		}
	})

	//update book
	.put('/:id', Authentication.isAdmin,async (req, res) => {
		if(!req.body || !req.body.book){
			res.status(400);
			res.send("missing book parameter");
		}
		else
		{
			let book = JSON.parse(req.body.book);
			Book.findByPk(req.params.id).then(async (bookToUpdate)=>{
				//si aucun book n'est trouvé avec cet id
				if(!bookToUpdate){
					res.status(404);
				}
				else{
					await bookToUpdate.update(book);
				}
			})
			res.send();
		}
	})

	//delete book
	.delete('/:id', Authentication.isAdmin,async (req, res) =>{
		Book.findByPk(req.params.id).then(async (book)=>{
			if(!book){
				res.status(404);
			}
			else{
				await book.destroy();
			}
			res.send();
		})
	})
	
module.exports = router;