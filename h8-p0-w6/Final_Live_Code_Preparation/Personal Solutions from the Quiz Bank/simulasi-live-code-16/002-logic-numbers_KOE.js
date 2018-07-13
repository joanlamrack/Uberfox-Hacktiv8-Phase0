/*
------------
LOST NUMBERS
------------

PROBLEM
=======
lostNumbers adalah sebuah function yang akan menerima tiga parameter.
Tiga parameter tersebut adalah tiga angka yang berbeda.
Function akan menampilkan di log setiap angka diantara angka terkecil dan angka terbesar dari antara ketiga angka tersebut.
Hindari menampilkan angka yang merupakan salah satu dari tiga angka parameter tersebut.

Contoh:

first = 6, second = 1, third = 3
berarti, function akan menampilkan di console 1 per 1 angka:
2
4
5

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
- Dilarang menggunakan Math.max, Math.min, .apply, .bind, .call
- Dilarang menggunakan spread operator (abaikan jika tidak tahu ini apa, belum penting untuk sekarang :))
- Dilarang menggunakan regex metode apapun
*/

/*

SET first , second AND third WITH ANY NUMBER
SET biggest, smallest WITH first
SET input_arr WITH ARRAY [first, second, third]

FOR EACH input OF input_arr
	IF biggest LESS THAN input
		SET biggest WITH input
	ENDIF
	IF smallest MORE THAN input
		SET smallest WITH input
	ENDIF
ENDFOR

SET i WITH (smallest + 1)

FOR LOOP FROM i UNTIL i IS LESS THAN biggest
		IF i DOES NOT EXIST IN input_arr
			DISPLAY i
		ENDIF
	INCREMENT i
ENDFOR

*/

function lostNumbers(first, second, third) {
	var biggest = smallest = first;
	var input_arr = [first, second, third];

	for(var input of input_arr){
		if(biggest < input){
			biggest = input;
		}
		if(smallest > input){
			smallest = input;
		}
	}

	for(var i = smallest+1; i < biggest; i++){
		if(input_arr.indexOf(i)=== -1){
			console.log(i);
		}
	}
}

lostNumbers(1, 3, 5);
// 2
// 4

lostNumbers(4, 6, 2);
// 3
// 5

lostNumbers(100, 108, 105);
// 101
// 102
// 103
// 104
// 106
// 107

lostNumbers(6, 5, 3);
// 4

lostNumbers(3, 1, 2);
// (TIDAK ADA YANG DITAMPILKAN CONSOLE)