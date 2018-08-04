'use strict';
module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: {
		type:DataTypes.STRING,
		validate: {
			allowNull:{
				msg:"Title is required"
			}
		}
	},
    desciption: {
		type:DataTypes.STRING,
		validate: {
			allowNull:{
				msg:"Description is required"
			}
		}
	},
    author: {
		type:DataTypes.STRING,
		validate: {
			allowNull:{
				msg:"Author is required"
			}
		}
	},
    availableToBorrow: DataTypes.BOOLEAN,
    LoanId: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    Book.belongsTo(models.Loan);
  };
  return Book;
};