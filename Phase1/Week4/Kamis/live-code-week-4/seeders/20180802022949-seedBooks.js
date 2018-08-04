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

		return queryInterface.bulkInsert("Books", [
			{
				title: "Doraemon",
				desciption: "just a comic",
				author: "Fujiko F Fujio",
				createdAt:new Date,
				updatedAt:new Date
			},
			{
				title: "Kingdom Of Hearts",
				desciption: "just a comic",
				author: "Masako",
				createdAt:new Date,
				updatedAt:new Date
			},
			{
				title: "Kisah Sukses daya melewati live code phase 1",
				desciption: "Biografi saya",
				author: "Joan Lamrack",
				createdAt:new Date,
				updatedAt:new Date
			},
		], {});


	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

  	 return queryInterface.bulkDelete('Books', null, {});
	}
};
