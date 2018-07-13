/*
Algoritma

1. saya punya dua array dan akan dilakukan looping. saya akan menggabungkan array tersebut menjadi satu array, tetapi saya tidak mau ada nilai yang sama atau duplikat. 
2. saya membutuhkan sebuah variable untuk penampung hasil akhir, aku kasih nama variablenya dengan nama hasilAkhir dengan nilai string kosong.
3. sekarang saya akan melakukan looping dengan inisialisasi variable i dengan nilai awal sama dengan 0 (i = 0), kondisinya jika i kurang dari panjang array 2 (i < seconData.length), dan i increment (i++)
4. selanjutnya saya membuat looping lagi didalam looping tadi, dengan inisialisasi variable j dengan nilai awal sama dengan 0 (j = 0), kondisi jika j kurang dari array 1 (j < firstData.length), dan i increment (i++)
5. sekarang saya akan membandingkan array 2 dengan index i dan array 1 dengan index j. dimana index i dan j dengan nilai awalnya sama dengan 0. maka akan mengecek apakah array 2 dengan index i = 0 sama dengan array 1 dengan index j = 0 ? dimana index i = 0 pada data array 2 adalah 'kazuya', dan pada array index j = 0 pada data array 1 adalah 'kazuya' maka yang diambil adalah nilai dari array  1. jika tidak sama dengan, maka ambil nilai dari array 2.
6. setelah dihasilkan nilainya, maka push nilai dari array 2 ke array 1.
7. kembalikan nilai data array 1
8. selesai
*/

function arrayMerge (firstData, secondData) {
  
}

// Test cases

//console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

 console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// // ['sergei', 'jin', 'steve', 'bryan']

// console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// // ['alisa', 'yoshimitsu', 'devil jin', 'law']

// console.log(arrayMerge([], ['devil jin', 'sergei']));
// // ['devil jin', 'sergei']

// console.log(arrayMerge(['hwoarang'], []));
// // ['hwoarang']

// console.log(arrayMerge([], []));
// []