var express = require('express');
var bodyParser = require('body-parser')
var Sequelize = require('sequelize');
var app = express();

app.use(bodyParser.urlencoded({
	extended: true
})); 

//paramètres de sequelize
sequelize = new Sequelize('bibliotheque', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	freezeTableName: true,
	define: {
		timestamps: false
	}
});

//routes
app.use("", require("./authentification").routes);
app.use("/authors", require("./routes/authors"));
app.use("/books", require("./routes/books"));

//lancement du serveur
app.listen(8000, function() {
		console.log("serveur initialisé");
	});
