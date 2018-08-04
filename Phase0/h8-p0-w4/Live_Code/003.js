/*
================
Break Sentence
================
Name :_____________

[INSTRUCTIONS]
breakSentence adalah sebuah function yang menerima satu parameter berupa string kalimat.
function akan mereturn sebuah array yang berisikan setiap kata di kalimat tesebut.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
breakSentence('I am so amazed')
output: ['i', 'am', 'so', 'amazed']

PSEUDOCODE

SET sentence WITH ANY STRING VALUE
SET buffer WITH EMPTY STRING
SET output WITH EMPTY ARRAY


FOR EACH letter of sentence
	IF letter EQUAL TO " " OR letter IS LAST ITEM ON sentence
		APPEND buffer TO output
		SET buffer TO EMPTY STRING
	ELSE
		SET buffer WITH buffer ADDED WITH letter
	ENDIF
ENDFOR

DIPLAY output

*/

function breakSentence(sentence) {
	var output = [];
	var buffer = '';
	if (sentence){
		for(var i= 0 ; i< sentence.length ; i++){
		  	if(sentence[i] === " " && buffer !==''){
		  		output.push(buffer);
		  		buffer="";
			}
			else if(sentence[i] !== " " ){
				buffer+=sentence[i];
			}
		}
		output.push(buffer);
	}
	return output;
}

console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('')); // []
console.log(breakSentence('week3 is so easy')); // ['week3', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']
