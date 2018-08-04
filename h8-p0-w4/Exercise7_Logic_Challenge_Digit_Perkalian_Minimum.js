//Exercise 7 Hitung digit minimal

function digitPerkalianMinimum(InputAngka) {
	var output;
	for (var i = 1; i < InputAngka + 1; i++) {
		if(!output || output>(i+""+InputAngka/i).length){
			output = (i+""+InputAngka/i).length;
		}
	}
	return output;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2