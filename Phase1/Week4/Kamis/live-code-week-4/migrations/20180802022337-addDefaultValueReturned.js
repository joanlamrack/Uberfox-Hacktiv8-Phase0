"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

		return queryInterface.changeColumn("Loans", ["returned"],{
			type:Sequelize.BOOLEAN,
			defaultValue:false
		});
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

		return queryInterface.changeColumn("Loans", ["returned"],{
			type:Sequelize.Boolean,
			defaultValue:null
		});
	}
};
