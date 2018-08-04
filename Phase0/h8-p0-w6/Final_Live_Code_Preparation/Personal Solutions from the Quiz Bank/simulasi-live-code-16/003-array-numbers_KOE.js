/*
-------------------
The Number Cruncher
-------------------

PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima sebuah parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil penambahan angka di
index array sebelumnya dengan dua angka yang berada di kiri dan kanannya. Apabila tidak ada
angka di kiri atau kanan, maka dianggap sebagai 0. Kemudian, dari setiap nilai di dalam array tersebut,
ambil yang nilainya ganjil, kemudian tambahkan semua nilai ganjil tersebut dan return nilai total ganjilnya.

Pola
----
input: [x, y, z, a, b]
proses: 
[
  (x + 0 + kanan dari x)
  (y + kiri dari y + kanan dari y)
  (z + kiri dari z + kanan dari z)
  (a + kiri dari a + kanan dari a)
  (b + kiri dari b + 0)
]

Contoh
-------
Input: [ 2 , 5 , 1 , 3 ]
Proses:
=> [ (2 + 0 + 5) , (5 + 2 + 1), (1 + 5 + 3), (3 + 1 + 0) ]
=> [ 7, 8, 9, 4 ]
=> nilai ganjil: 7 dan 9
=> 7 + 9
Output: 16


Input: [2, 3, 1, 4, 1, 5, 0, 3]
Proses:
=> [ 5, 6, 8, 6, 10, 6, 8, 3 ]
=> nilai ganjil: 5 dan 3
=> 5 + 3
Output: 8

Input: [3, 6, 8, 9, 1, 2, 3]
Proses:
=> [ 9, 17, 23, 18, 12, 6, 5 ]
=> nilai ganjil: 9, 17, 23, 5
=> 9 + 17 + 23 + 5
Output: 54

RULES
=====

- Wajib menggunakan pseudocode sebelum memulai kode
*/

/*
	SET numbers WITH ARRAY OF NUMBERS
	SET output WITH 0
	SET temp_arr WITH EMPTY ARRAY

	SET i WITH 0
	FOR LOOP FROM i UNTIL i IS LESS THAN LENGTH OF number
		SET temp WITH ELEMENT i FROM number
		IF ELEMENT AFTER i EXIST
			SET temp WITH temp ADDED WITH ONE ELEMENT AFTER i
		ENDIF

		IF ELEMENT BEFORE i EXIST
			SET temp WITH temp ADDED WITH ONE ELEMENT BEFORE i
		ENDIF
		APPEND temp INTO temp_arr
	ENDFOR

	FOR EACH number OF temp_arr
		IF number MOD 2 EQUAL TO 0
			SET output WITH output ADDED WITH number
		ENDIF
	ENDFOR

	DISPLAY output;
*/

function numberCruncher(numbers) {
	var output = 0;
	var temp_arr = [];

	for(var i = 0; i<numbers.length ;i++){
		temp_arr.push(numbers[i]+(numbers[i+1]? numbers[i+1] : 0) + (numbers[i-1]? numbers[i-1] : 0))
	}
	for(var number of temp_arr){
		if(number % 2){output+=number}
	}

	return output;
}

console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // 8
console.log(numberCruncher([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); // 6
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // 54
console.log(numberCruncher([1, 0, 1, 1, 0, 1, 0, 1])); // 3
console.log(numberCruncher([])); // 0