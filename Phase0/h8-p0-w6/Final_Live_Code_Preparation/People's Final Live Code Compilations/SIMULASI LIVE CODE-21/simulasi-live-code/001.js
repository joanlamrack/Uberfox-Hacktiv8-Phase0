/*
======================
Highest Global Minimum
======================

Name :_____________

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.

[]

[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])

firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

/*
	SET firstArr WITH ARRAY OF NUMBERS
	SET secondArr WITH ARRAY OF NUMBERS

	SET firstMin WITH firstArr INDEX OF 0
	SET secondMin WITH secondArr INDEX OF 0

	FOR EACH number OF firstArr
		IF firstMin MORE THAN number
			SET firstMin WITH number
		ENDIF
	ENDFOR 


	FOR EACH number2 OF secondArr
		IF secondMin MORE THAN number2
			SET secondMin WITH number2
		ENDIF
	ENDFOR 


	IF firstMin MORE THAN secondMin
		RETURN firstMin
	ELSE
		RETURN secondMin
	ENDIF
*/

function highestGlobalMinimum(firstArr, secondArr) {
  var firstMin = firstArr[0];
  var secondMin = secondArr[0];

  for(var number of firstArr){
  	if(firstMin> number){
  		firstMin = number;
  	}
  }

  for(var number2 of secondArr){
  	if(secondMin> number2){
  		secondMin = number2;
  	}
  }

  return (firstMin > secondMin ? firstMin : secondMin)
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5
