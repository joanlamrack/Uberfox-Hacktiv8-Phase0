function toRoman(num){
	let output = "";
	let baseTenRomanReference = 1;
	const romanReference = {
		1:"I",
		5:"V",
		10:"X",
		50:"L",
		100:"C",
		500:"D",
		1000:"M"
	}

	for(var digit of Array.from(num.toString()).reverse()){
		//jika digit adalah kelipatan 1 - 3 dari anchor, print sesuai dari table sesuai jumlah
		if(Number(digit) >= 1 && Number(digit) <= 3 ){
			for(var i = 0 ; i < Number(digit); i++){
				output+=romanReference[baseTenRomanReference.toString()];
			}
		} //jika digit adalah anchor kelipatan 4 - 8 dari anchor
		else if (Number(digit) >= 4 && Number(digit) <= 8) {
				if(Number(digit) > 5){
					for(var j = 0 ; j < (Number(digit)-5); j++){
						output+=romanReference[baseTenRomanReference.toString()];
					}
				}
				output+=romanReference[(baseTenRomanReference*5).toString()];
				if(Number(digit)-5 === -1) output+=romanReference[baseTenRomanReference.toString()];
		}//jika digit adalah anchor * 9
		else{
			output+=romanReference[(baseTenRomanReference*10).toString()];
			if(Number(digit)- 10 === -1) output+=romanReference[baseTenRomanReference.toString()];
		}
		baseTenRomanReference*=10;
	}

	return Array.from(output).reverse().join("");
}

console.log("My totally sweet teseting script\n");
console.log("input	|	Expected	|	actual");
console.log("_______|_______________|_________");
console.log("4		|	IV			|	", toRoman(4));
console.log("9		|	IX			|	", toRoman(9));
console.log("23		|	XXIII		|	", toRoman(23));
console.log("1453	|	MCDLIII		|	", toRoman(1453));
console.log("1646	|	MDCXLVI		|	", toRoman(1646));