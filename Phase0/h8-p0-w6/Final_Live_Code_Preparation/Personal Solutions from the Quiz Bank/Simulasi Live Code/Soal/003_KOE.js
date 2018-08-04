/*
------------
NUMBERS DIVIDER
------------
PROBLEM
=======
numbersDivider adalah sebuah function yang akan menerima satu parameter berupa number.
Function akan mengembalikan array dua dimensi dimana array pertama berisi kumpulan pembagi parameter tersebut
dan array ke dua berisi penjumlahan dari angka pembagi yang ganjil

Contoh:
input: 6
output:
[ [6, 3, 2, 1], 4 ]

input: 8
output:
[ [8, 4, 2, 1], 1 ]

input: 13
output:
[ [13, 1], 14 ]

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
- Dilarang menggunakan .reduce, .map, .filter
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
- Dilarang menggunakan regex metode apapun
*/

/*
SET num WITH ANY NUMBER
SET i WITH 1
SET output WITH EMPTY ARRAY
SET buffer WITH EMPTY ARRAY
FOR LOOP FROM i UNTIL i < num
	IF num MOD i EQUALS TO 0 
		PUSH i INTO buffer
	ENDIF
	INCREMENT i
ENDFOR
REVERSE buffer
PUSH buffer INTO output

SET buffer WITH 0

FOR EACH number IN buffer
	IF number MOD 2 EQUAL TO 1
		output[1] EQUALS TO output[1] PLUS number
	ENDIF
ENDFOR

DISPLAY output

*/

function numbersDivider(num) {
	var output = [[], 0]
	for(var i = 1 ; i <= num ; i++){
		if(num % i === 0){
			output[0].push(i);
		}
	}
	output[0].reverse();

	for(var number of output[0]){
		if(number % 2 === 1){
			output[1]+= number;
		}
	}
	return output;
}

console.log(numbersDivider(6));      // [ [6, 3, 2, 1], 4 ]
console.log(numbersDivider(8));     // [ [8, 4, 2, 1], 1 ]
console.log(numbersDivider(13));     // [ [13, 1], 14 ]