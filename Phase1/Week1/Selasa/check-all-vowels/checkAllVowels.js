function checkVowel(str){
	const kamus = "aiueo ";
	if(str.length === 0){
		return true;
	}
	else{
		let allVowel = false;
		for(let glossary of kamus){
			if(str[0]===glossary ||str[0]===glossary.toUpperCase()) allVowel = true;
		}
		return allVowel && checkVowel(str.slice(1));
	}	
}

console.log(checkVowel("hei"));
console.log(checkVowel("ei   "));