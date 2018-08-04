let str = "abacccccabacccceeeeddddabaeeeaba"
let str2 = "kkkmmmmooonnoooommmmxxxppaaammmm"

// str adalah string yang akan kita cari perulangannya
// length adalah jumlah karakter yang akan kita cari
// misal length = 2, maka kita akan mencari perulangan yang berisikan 2 karakter contoh: 'ab'
// length = 3, contoh: 'aba'

function countChar(str, length){
	let occurrence = {}
	let biggest;
	let biggest_word;

	for(let index = 0 ; index < str.length-(length-1) ; index++){
		let findMatchesWithThisWord = "";
		for(let startWordIndex = index; startWordIndex < (index + length) ; startWordIndex++){
			findMatchesWithThisWord+=str[startWordIndex];
		}

		if(!occurrence[findMatchesWithThisWord]){
			occurrence[findMatchesWithThisWord] = 1;
		}
		else{
			occurrence[findMatchesWithThisWord]++;

		}
	}

	for(let word in occurrence){
		if(!biggest){
			biggest = occurrence[word];
			biggest_word = word;
		}
		else{
			if(biggest<occurrence[word]){
				biggest = occurrence[word];
				biggest_word = word;
			}
		}
	}

	return `"${biggest_word}" - ${biggest}x`;
}

console.log(countChar(str, 3));
console.log(countChar(str, 1));
console.log(countChar(str2, 3));
console.log(countChar(str2, 1));