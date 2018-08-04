'use strict';
module.exports = (sequelize, DataTypes) => {
	var Loan = sequelize.define('Loan', {
		borrowerName: DataTypes.STRING,
		borrowerGender: DataTypes.STRING,
		dueDate: DataTypes.DATE,
		returned: DataTypes.BOOLEAN
	}, {});
	Loan.associate = function(models) {
		Loan.hasMany(models.Book);
	};
	return Loan;
};