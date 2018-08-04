/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
*/

/*
SET numbers WITH ANY NUMBER
SET output WITH EMPTY ARRAY
SET min WITH FIRST ELEMENT OF numbers
SET max WITH FIRST ELEMENT OF numbers

FOR EACH number IN NUMBERS
	IF min MORE THAN number
		SET min WITH number
	ELSE IF max  LESS THAN number
		SET max WITH number
	ENDIF
ENDFOR

FOR i IS min PLUS 1, UNTIL i IS LESS THAN MAX, LOOP
	IF i IS NOT FOUND BETWEEN ELEMENTS OF number
		APPEND i TO output;
	ENDIF
	INCREMENT i
ENDFOR

DISPLAY output;
*/

function missingNumbers (numbers) {
	var output = [];
	var min = numbers[0];
	var max = numbers[0];

	for( var number of numbers){
		if(min > number){
			min = number;
		}
		else if (max < number){
			max = number;
		}
	}

	for(var i = min + 1 ; i < max ; i++){
		if(numbers.indexOf(i) === -1 ){
			output.push(i);
		}
	}

	return output;

}
//1, 5, 6, 7, 10
console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []
