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
Algoritma
1. buat variable dengan nama 'dataNumber' dengan nilai array kosong
2. push nilai first, second, and third pada "dataNumber"
3. buat variable baru lagi dengan nama 'sortDataNumber' dengan nilai 'dataNumber'.sort() untuk melakukan sorting nilai dari yang terkecil ke yang besar.
4. buat variable lagi dengan nama 'max', dengan nilai 'sortDataNumber' dengan index jumlah panjang pada 'sortDataNumber' dikurangi 1. Ini untuk mencari nilai maximum pada "sortDataNumber".
5. buat variable lagi dengan nama 'min' dengan nilai 'sortDataNumber' dengan index ke 0. ini untuk mencari nilai minimum pada 'sortDataNumber'
6. lakukan perulangan dengan inisialisasi variable a dengan nilai 'min' ditambah 1, kondisinya jika a kurang dari 'max', dan a selalu bertambah satu
  6a. jika a kurang dari sortDataNumber dengan index ke 1, maka tampilkan a. jika tidak memenuhi, masuk ke step 6b.
  6b. jika a lebih dari sortDataNumber dengan index ke 1 Dan a kurang dari 'max', maka tampilkan a.
*/

function lostNumbers(first, second, third) {
  var dataNumber = [first, second, third]
  var sortDataNumber = dataNumber.sort()
  //console.log(sortDataNumber)
  
  var max = sortDataNumber[sortDataNumber.length-1]
  var min = sortDataNumber[0]


  for(var a = min+1; a < max; a++){
    if(a < sortDataNumber[1]){
      console.log(a)
    } else if(a > sortDataNumber[1] && a < max){
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
