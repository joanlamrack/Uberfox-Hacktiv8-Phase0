/*
------------
NUMBERS DIVIDER
------------
PROBLEM
=======
numbersDivider adalah sebuah function yang akan menerima satu parameter berupa number.
Function akan mengembalikan array dua dimensi dimana array pertama berisi kumpulan pembagi parameter tersebut
dan array ke dua berisi penjumlahan dari angka pembagi yang ganjil

Contoh:
input: 6
output:
[ [6, 3, 2, 1], 4 ]

input: 8
output:
[ [8, 4, 2, 1], 1 ]

input: 13
output:
[ [13, 1], 14 ]

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
- Dilarang menggunakan .reduce, .map, .filter
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
- Dilarang menggunakan regex metode apapun
*/

/*
Algoritma: 
1. buat variable baru dengan nama 'kumpulanHasilPembagi' dengan nilai array kosong
2. buat variable baru lagi dengan nama 'hasilAkhir' dengan nilai array kosong
3. lakukan looping dengan inisialisasi variabel a dengan nilai 0, kondisi jika a kurang dari atau sama dengan 'num' dan a selalu bertambah 1.
    3a. jika 'num' di MOD dengan a hasilnya sama dengan 0, maka a dipush ke variable 'kumpulanHasilPembagi'
4. buat variable baru dengan nama 'sortHasilPembagi' dengan nilai 'kumpulanHasilPembagi'.sort(function(a,b){return b - a}) untuk melakukan sorting dari nilai yang terbesar ke terkecil.
4. buat variable dengan nama 'jumlahNumGanjil' dengan nilai 0
5. lakukan looping dengan inisialisasi variable b dengan nilai 0, kondisi jika b kurang dari jumlah panjang 'sortHasilPembagi', dan b selalu bertambah 1
    5a. jika ''sortHasilPembagi'' di MOD dengan 2 sama dengan 0, maka 'jumlahNumGanjil' = 'jumlahNumGanjil' + ''sortHasilPembagi' dengan index b (jumlahNumGanjil += kumpulanHasilBagi[b]).
6. push "kumpulanHasilBagi" dan "jumlahNumGanjil" ke variable 'hasilAkhir'
7. kembalikan nilai 'hasilAkhir'
*/

function numbersDivider(num) {
    var kumpulanHasilPembagi = []
    var hasilAkhir = []
    var jumlahNumGanjil = 0

    for(var a = num; a >= 0; a--){
        if(num % a === 0){
            kumpulanHasilPembagi.push(a)
        }
        // console.log(a)
    }

    console.log(kumpulanHasilPembagi)

    for(var b = 0; b < kumpulanHasilPembagi.length; b++){
        if(kumpulanHasilPembagi[b] % 2 === 1){
            jumlahNumGanjil += kumpulanHasilPembagi[b]
        }
    }

    hasilAkhir.push(kumpulanHasilPembagi, jumlahNumGanjil)
    return hasilAkhir
    
}

console.log(numbersDivider(6));      // [ [6, 3, 2, 1], 4 ]
console.log(numbersDivider(8));     // [ [8, 4, 2, 1], 1 ]
console.log(numbersDivider(13));     // [ [13, 1], 14 ]
