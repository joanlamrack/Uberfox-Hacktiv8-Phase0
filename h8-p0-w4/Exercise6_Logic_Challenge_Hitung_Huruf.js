//Exercise 6 Hitung Huruf

/*Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.*/

function hitungHuruf(kata) {
	var max_word = ["",0];
	var theWordOccurence = 0;;
	kata = kata.match(/[^\s]+[a-zA-z]/gm);
	for (var word of kata){
		if(word.split("").sort().join("").match(/(.)\1+/g)){
			theWordOccurence = word.split("").sort().join("").match(/(.)\1+/g).length;
			if(theWordOccurence>max_word[1]){
				max_word = [word, theWordOccurence];
			}
		}
	}
	return max_word[0];
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau