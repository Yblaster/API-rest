var Sequelize = require('sequelize');

class User extends Sequelize.Model{}
User.init({
	utilisateurId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	utilisateurNom: Sequelize.STRING,
	utilisateurMdp: Sequelize.STRING,
	utilisateurIsAdmin: Sequelize.BOOLEAN
}, {sequelize, tableName: 'utilisateur'});

module.exports = User;