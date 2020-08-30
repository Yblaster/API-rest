var Sequelize = require('sequelize');

class Auhtor extends Sequelize.Model{}
Auhtor.init({
		auteurId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	auteurNom: Sequelize.STRING
}, {sequelize, tableName: 'auteur'});

module.exports = Auhtor;