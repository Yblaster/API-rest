var express = require('express');
var router = express.Router();
var Authentication = require("../authentification.js");
var Author = require("../models/author");

router
	//get all books
	.get('', Authentication.isLogged, function(req, res){
		Author.findAll().then(authors =>{
			res.status = 200;
			res.send(authors);
		})
	})

	//get book
	.get('/:id', Authentication.isLogged, function(req, res){
		Author.findByPk(req.params.id).then((author)=>{
			if(author)
				res.send(author);
			//si aucun author n'est trouvé avec cet id
			else{
				res.status(404);
				res.send();
			}
		})
	})

	//get books by author
	.get('/author/:id', Authentication.isLogged, function(req, res){
		Author.findByPk(req.params.id).then((author)=>{
			if(author)
				res.send(author);
			//si aucun author n'est trouvé avec cet id
			else{
				res.status(404);
				res.send();
			}
		})
	})

	//create book
	.post('', Authentication.isAdmin, function(req, res){
		if(!req.body || !req.body.author){
			res.status(400);
			res.send("missing author parameter");
		}
		else{
			var authorToCreate = JSON.parse(req.body.author);
			Author.create(authorToCreate).then(author => {
				res.status = 200;
				res.send(author);
			}).catch((error)=>{
				res.status(500);
				res.send(error);
			})
		}
	})

	//update book
	.put('/:id', Authentication.isAdmin,async (req, res) => {
		if(!req.body || !req.body.author){
			res.status(400);
			res.send("missing author parameter");
		}
		else
		{
			let author = JSON.parse(req.body.author);
			Author.findByPk(req.params.id).then(async (authorToUpdate)=>{
				//si aucun author n'est trouvé avec cet id
				if(!authorToUpdate){
					res.status(404);
					res.send();
				}
				else{
					authorToUpdate.update(author).then(()=>{
						res.status = 200;
					}).catch((error)=>{
						res.status = 500;
						res.send(error);
					})
				}
			})
		}
	})

	//delete book
	.delete('/:id', Authentication.isAdmin,async (req, res) =>{
		Author.findByPk(req.params.id).then(async (author)=>{
			if(!author){
				res.status = 404;
			}
			else{
				await author.destroy();
				res.status = 200;
			}
			res.send();
		})
	})

module.exports = router;