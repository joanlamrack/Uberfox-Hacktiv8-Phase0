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
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
- Dilarang menggunakan regex metode apapun
*/

/*

SET first WITH ANYNUMBER
SET second WITH ANYNUMBER
SET third WITH ANYNUMBER
SET bigger WITH first
SET smaller WITH first
SET arrnum WITH ARRAY OF (first,second, third)

FOR EACH num IN arrnum
	IF bigger LESS THAN num
		SET bigger WITH num
	ENDIF
ENDFOR

FOR EACH num IN arrnum
	IF smaller more THAN num
		SET smaller WITH num
	ENDIF
ENDFOR

SET i WITH smaller + 1

FOR LOOP from i UNTIL LESS THAN bigger
	FOR EACH num IN arrnum
		SET found WITH FALSE
		IF i EQUAL TO num
			SET found WITH TRUE
		ENDIF
	ENDFOR
	IF found
		DISPLAY i
	ENDIF
	INCREMENT i
ENDFOR


*/

function lostNumbers(first, second, third) {
	var bigger = smaller = first;
	var arrnum = [first, second, third]

	for (var num of arrnum){
		if(bigger < num){
			bigger = num;
		}
	}

	for (var num of arrnum){
		if(smaller > num){
			smaller = num;
		}
	}
	//console.log(smaller + "\t"+bigger);
	for(var i = smaller + 1 ; i < bigger ; i++){
		var found = false;
		for(var num of arrnum){
			if(i === num){
				found = true;
			}
		}
		if(!found){
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
