var Sequelize = require('sequelize');
var  Author = require('./author');

class Book extends Sequelize.Model{}
Book.init({
	livreId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	livreISBN: Sequelize.STRING,
	livreTitre: Sequelize.STRING
}, {sequelize, tableName: 'livre'});

Book.belongsTo(Author, {foreignKey: 'livreAuteur'});

module.exports = Book;