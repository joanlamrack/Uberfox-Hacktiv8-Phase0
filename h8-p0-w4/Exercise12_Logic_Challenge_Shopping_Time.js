//Exercise 12 Shopping Time

function shoppingTime(memberId, money) {
	var memberMoney = money;
	var output = {
		memberId : memberId,
		money : money,
		listPurchased : [],
		changeMoney : 0
	}
	if(!memberId){
		return "Mohon maaf, toko X hanya berlaku untuk member saja";
	}
	else if(money < 50000){
		return "Mohon maaf, uang tidak cukup";
	}
	else{
		if(memberMoney >= 1500000){
			memberMoney = memberMoney - 1500000;
			output.listPurchased.push('Sepatu Stacattu');
		}
		if(memberMoney >= 500000){
			memberMoney = memberMoney - 500000;
			output.listPurchased.push('Baju Zoro');
		}
		if(memberMoney >= 250000){
			memberMoney = memberMoney - 250000;
			output.listPurchased.push('Baju H&N');
		}
		if(memberMoney >= 175000){
			memberMoney = memberMoney - 175000;
			output.listPurchased.push('Sweater Uniklooh');
		}
		if(memberMoney >= 50000){
			memberMoney = memberMoney - 50000;
			output.listPurchased.push('Casing Handphone');
		}

		output.changeMoney = memberMoney;

	}
	return output;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja