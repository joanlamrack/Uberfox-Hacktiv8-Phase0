"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

		return queryInterface.bulkInsert("Subjects", [
			{
				"subject_name": "Kimia",
				"createdAt": new Date,
				"updatedAt": new Date
			},
			{
				"subject_name": "Ekonomi",
				"createdAt": new Date,
				"updatedAt": new Date
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

		return queryInterface.bulkDelete("Subjects", null, {});
	}
};
