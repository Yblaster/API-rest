var jwt = require('jsonwebtoken');
var User = require("./models/user.js");
var express = require('express');
var router = express.Router();

const secret = "secret";

//authentifie l'user
function authentificate(name, password){
	return new Promise(function(resolve, reject){
		User.findAll({
			where: {
				utilisateurNom : name,
				utilisateurMdp : password
			}
		}).then((users) => {
			if(users.length > 0)
			{
				var user = users[0];
				var token = jwt.sign({ name: user.utilisateurNom, isAdmin : user.utilisateurIsAdmin }, secret);
				resolve(token);
			}
			else{
				resolve(false);
			}
		});
	});
};

//retourne l'user passé dans le token
function getDecodedToken(req, res){
	return new Promise(function(resolve, reject){
		if(!req.headers.authorization){
			res.status(400);
			res.send("Missing token");
			reject();
		}
		var token = req.headers.authorization.slice(7, req.headers.authorization.length);
		jwt.verify(token, secret, function(error, decoded){
			if(!decoded){
				res.status(400);
				res.send("Wrong token");
				reject();
			}
			else{
				resolve(decoded);
			}
		})
	})
}

//vérifie si l'user est authentifié et s'il a les droits d'administrateur
exports.isAdmin = function(req, res, next){
	getDecodedToken(req, res).then((decodedToken)=>{
		if(!decodedToken.isAdmin){
			console.log(decodedToken);
			res.status(401);
			res.send("Need admin permissions");
		}
		else
			next();
	})
}

//vérifie si l'user est authentifié
exports.isLogged = function(req, res, next){
	getDecodedToken(req, res).then(() => {
		next();
	})
}

//routes d'authentification et d'inscription
router
	//authentification
	.get('/login/:name/:password', function(req, res){
		if(!req.params.name || !req.params.password)
		{
			res.status = 400;
			res.send("Missing name and/or password");
		}
		else
		{
			authentificate(req.params.name, req.params.password).then((token)=>{
				if(token)
				{
					res.status = 200;
					res.send({token: token})
				}
				else{
					res.status = 404;
					res.send("Wrong name and/or password");
				}
			});
		}
	})

	//inscription
	.post('/register', this.isAdmin, function(req, res){
		if(!req.body || !req.body.user){
			res.status(400);
			res.send("missing user parameter");
		}
		else
		{
			userToRegister = JSON.parse(req.body.user);
			User.create(userToRegister).then(() => {
				res.status = 200;
				res.send();
			})
			.catch((error)=>{
				res.status = 500;
				res.status(error);
			})
		}
	})

exports.routes = router;