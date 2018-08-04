/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.

PSEUDOCODE

SET str WITH ANY STRING
SET output WITH EMPTY STRING

FOR EACH letter OF str
	IF letter EQUAL TO '1'
		APPEND output WITH 'i'
	ELSE IF letter EQUAL TO '4'
		APPEND output WITH 'a'
	ELSE IF letter EQUAL TO '3'
		APPEND output WITH 'e'
	ELSE IF letter EQUAL TO '7'
		APPEND output WITH 'u'
	ELSE IF letter EQUAL TO '0'
		APPEND output WITH 'o'
	ELSE
		APPEND letter TO output
	ENDIF
ENDFOR 

DISPLAY output

*/

function numberLetters (str) {
  	var output= '';
	for(var letter of str){
		if (letter ==="1"){
			output+='i';
		}
		else if (letter === "4"){
			output+='a';
		}
		else if (letter === "3"){
			output+='e';
		}
		else if (letter === "7"){
			output+='u';
		}
		else if (letter === "0"){
			output+='o';
		}
		else{
			output+=letter;
		}
	}
  	return output;
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //
