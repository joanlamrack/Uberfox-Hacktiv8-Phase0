function toRoman(num){
	const romanReference = 
	[
		[1000, "M"],
		[900, "CM"],
		[500, "D"],
		[400, "CD"],
		[100, "C"],
		[90, "XC"],
		[50, "L"],
		[40, "XL"],
		[10, "X"],
		[9, "IX"],
		[5, "V"],
		[4, "IV"],
		[1, "I"]
	];
	
	if(num === 0){
		return "";
	}
	else{
		for(let romanGlossary of romanReference){
			if(num>= romanGlossary[0]){
				return romanGlossary[1] + toRoman(num-romanGlossary[0]);
			}
		}
	}
}

console.log("My totally sweet teseting script\n");
console.log("input	|	Expected	|	actual");
console.log("_______|_______________|_________");
console.log("4		|	IV			|	", toRoman(4));
console.log("9		|	IX			|	", toRoman(9));
console.log("23		|	XXIII		|	", toRoman(23));
console.log("1453	|	MCDLIII		|	", toRoman(1453));
console.log("1646	|	MDCXLVI		|	", toRoman(1646));