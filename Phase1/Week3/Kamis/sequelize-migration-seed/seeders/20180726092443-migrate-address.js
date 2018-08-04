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

		return queryInterface.bulkInsert("Addresses",[
			{
				"street": "711-2880 Nulla St",
				"city": "Mississippi",
				"zip_code": 96522,
				"createdAt": new Date,
				"updatedAt": new Date
			},
			{
				"street": "8562 Fusce Rd",
				"city": "Nebraska",
				"zip_code": 20620,
				"createdAt": new Date,
				"updatedAt": new Date
			},
			{
				"street": "606-3727 Ullamcorper Street",
				"city": "Roseville",
				"zip_code": 11523,
				"createdAt": new Date,
				"updatedAt": new Date
			},
			{
				"street": "867-859 Sit Rd",
				"city": "New York",
				"zip_code": 39531,
				"createdAt": new Date,
				"updatedAt": new Date
			},
			{
				"street": "7292 Dictum Av",
				"city": "San Antonio",
				"zip_code": 47096,
				"createdAt": new Date,
				"updatedAt": new Date
			},
			{
				"street": "651-8679 Sodales Av",
				"city": "Tamuning",
				"zip_code": 10855,
				"createdAt": new Date,
				"updatedAt": new Date
			},
			{
				"street": "191-103 Integer Rd",
				"city": "Corona New Mexico",
				"zip_code": "08219",
				"createdAt": new Date,
				"updatedAt": new Date
			},
			{
				"street": "2508 Dolor. Av",
				"city": "Muskegon KY",
				"zip_code": 12482,
				"createdAt": new Date,
				"updatedAt": new Date
			},
			{
				"street": "666-4366 Lacinia Avenue",
				"city": "Ohio",
				"zip_code": 19253,
				"createdAt": new Date,
				"updatedAt": new Date
			},
			{
				"street": "Lacinia Road",
				"city": "San Bernardino",
				"zip_code": "09289",
				"createdAt": new Date,
				"updatedAt": new Date
			}
	  ]);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

		return queryInterface.bulkDelete("Addresses", null, {});
	}
};
