/*
Algoritma 002.js

1. Saya punya array akan di looping dan urutannya akan dibalik. setelah urutannya dibalik, maka hurufnya juga dibalik.
2. sebelum dilanjutkan ke step berikutnya, saya membutuhkan 2 buah variable baru untuk menampung hasil pembalikan data array dan hasil akhir pembalikan hurufnya. untuk variable pertama saya berinama variable hasil dengan nilai string kosong (hasil = ''), dan untuk variable kedua saya berinama resultArr dengan nilai square bracket  (resultArr = []). 
3. Sekarang saya akan melakukan looping, untuk inisialisasinya saya buat variable baru dengan nama variable i dengan nilai awal sama dengan panjang data array dikurang i (arr.length-1), kondisinya dimana i lebih besar atau sama dengan 0 (i >= 0), dan i nya decrement atau selalu berkurang 1.
4. saya menaruh variable hasil dibawah looping, dengan tujuan untuk menampung, dan jika dilakukan perulangan lagi maka variable hasil ini akan bernilai string kosong lagi.
5. saya membuat looping lagi yang kedua, untuk membalikan hurufnya. untuk inisialisasinya saya membuat variable dengan nama j dimana nilainya panjang data array ke i -1, kondisinya j >= 0, j decrement. 
6. jadi hasil = array dengan index ke i dan index ke j (hasil += arr[i][j])
7. setelah proses looping kedua selesai, maka hasil di push atau dimasukkan kedalam variable resultArr.
8. proses perulangan balik lagi ke awal, dimana nilai i = 2 dikurang 1. dan melakukan ini sampai habis panjang data arraynya.
9. setelah semua proses looping selesai, maka keluar dari looping.
10. kembalikan nilai resultArr.
11. selesai.
*/

function reverseAll(arr){
	var resultArr = []

	for(var i = arr.length-1; i >= 0; i--){
		var hasil = ''
		for(var j = arr[i].length-1; j >= 0; j--){
			hasil += arr[i][j]
		}
		resultArr.push(hasil)
	}
	return resultArr

}
console.log(reverseAll(['dimitri', 'sergei', 'alexei']))
console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']))