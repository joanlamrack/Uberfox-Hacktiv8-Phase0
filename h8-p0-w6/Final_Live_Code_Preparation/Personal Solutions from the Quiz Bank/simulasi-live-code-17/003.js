/*

==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

/*
	1. Set arr1 dengan array angka
	2. set arr2 dengan array angka
	3. set output dengan array kosong
	4. untuk setiap elemen dalam arr1, cari jika elemen tsb ada dalam arr2. Jika tidak ada, push elemen tsb ke output.
	5. kembalikan output.
*/

function findNotRelative(arr1, arr2) {
  var output = []
  for(var arr_item of arr1){
  	if(arr2.indexOf(arr_item) === -1){
  		output.push(arr_item);
  	}
  }
  return output;
}

console.log(findNotRelative([ 3, 6, 10, 12, 15 ], [ 1, 3, 5, 10, 16 ])); // [ 6, 12, 15]
console.log(findNotRelative([ 10, 20, 36, 59 ], [ 5, 10, 15, 59 ])); //[20, 36]
console.log(findNotRelative([ 1, 2, 3], [2, 1, 3])); //[]
