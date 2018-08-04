/**

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh. Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

Asumsi:
- Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.

RULE:
 WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 //DILARANG MENGGUNAKAN BUILT IN FUNCTION SORT DARI ARRAY JAVASCRIPT

*/

/*
	DECLARE FUNCTION howManyGifts WITH PARAMETER maxBudget(TYPE NUMBER), gifts(TYPE ARRAY OF NUMBERS)
		SET min WITH FIRST ELEMENT OF gifts
		SET newgift WITH EMPTY ARRAY

		FOR EACH number OF gifts
			IF min IS MORE THAN number
				SET min WITH number
			ENDIF 
		ENDFOR
	
		REMOVE ONE ELEMENT THAT IS SAME AS min FROM gifts

		FOR EACH gift OF gifts
			IF gift IS NOT EMPTY
				PUSH gift INTO newgift ARRAY
			ENDIF
		ENDFOR

		IF maxBudget IS LESS THAN min
			RETURN 0
		ELSE
			RETURN CALCULATE( 1 + CALL FUNCTION howManyGifts WITH PARAMETERS (CALCULATE(maxBudget - min), newgift ))
		ENDIF

	ENDFUNC
*/

function howManyGifts(maxBudget, gifts){

	var min = gifts[0];
	for(var number of gifts){
		if(min > number){
			min = number;
		}
	}

	delete gifts[gifts.indexOf(min)];

	var newgift =[];
	for(var gift of gifts){
		if(gift){
			newgift.push(gift);
		}
	}

	if(maxBudget < min){
		return 0;
	}
	else{
		return 1 + howManyGifts((maxBudget - min), newgift)
	}
}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0
