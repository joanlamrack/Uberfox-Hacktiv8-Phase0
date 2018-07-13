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

function lostNumbers(first, second, third) {
  var dataNumber = [first, second, third]
  var sortDataNumber = dataNumber.sort()
  var max = dataNumber[dataNumber.length-1]
  var min = dataNumber[0]
  var middle = dataNumber[1]

  for(var a = min+1; a < max; a++){
    if(a < middle){
      console.log(a)
    } else if(a > middle && a < max){
      console.log(a)
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