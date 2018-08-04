/*
di multidimensi array, yang harus student achieve:
- forming sebuah array multidimensi
- bisa mengakses isi terdalam dari array multidimensi
- bisa menambahkan element ke dalam array multidimensi, ke dimensi yang tepat
*/

/*

--------------
DIGITS GROUPER
--------------

PROBLEM
=======
digitsGrouper adalah sebuah function yang menerima array of number 1 dimensi.
Function akan membentuk array dua dimensi dimana dimensi pertama akan mengelompokkan angka-angka di array tadi sesuai jumlah digit nya.
Group akan berurut. posisi pertama untuk angka 1 digit, posisi kedua untuk angka 2 digit, dan seterusnya, hingga maksimal untuk angka 4 digit.

Contoh:
array of numbers: [1, 12, 1234, 13, 0, 88, 123, 456]
proses:
satu digit -> 1, 0
dua digit -> 12, 13, 88
tiga digit -> 123, 456
empat digit -> 1234

output:
[
  [1, 0],
  [12, 13, 88],
  [123, 456],
  [1234],
]

RULES
=====
Dilarang menggunakan method map, filter, dan reduce.
*/

function digitsGrouper(numbers) {
  var hasilAkhir = []
  var satuDigit = []
  var duaDigit = []
  var tigaDigit = []
  var empatDigit = []

  // for(var a = 0; a < numbers.length; a++){
  //   if(numbers[a] < 10){
  //     satuDigit.push(numbers[a])
  //   } else if(numbers[a] < 100){
  //     duaDigit.push(numbers[a])
  //   } else if(numbers[a] < 1000){
  //     tigaDigit.push(numbers[a])
  //   } else {
  //     empatDigit.push(numbers[a])
  //   }
  // }

  let stringNumber = String(numbers)
  let numberArr = stringNumber.split(',')

  for(let a = 0; a < numberArr.length; a++){
    if(numberArr[a].length === 1){
      satuDigit.push(numberArr[a])
    } else if(numberArr[a].length === 2){
      duaDigit.push(numberArr[a])
    } else if(numberArr[a].length === 3){
      tigaDigit.push(numberArr[a])
    } else if(numberArr[a].length === 4){
      empatDigit.push(numberArr[a])
    }
    
  }

  hasilAkhir.push(satuDigit, duaDigit, tigaDigit, empatDigit)
  return hasilAkhir
}

console.log(digitsGrouper([1, 12, 13, 0, 88, 123, 456])); // [ [ 1, 0 ], [ 12, 13, 88 ], [ 123, 456 ], [] ]
console.log(digitsGrouper([1234, 8, 2, 543, 1, 11, 222, 7654])); // [ [ 8, 2, 1 ], [ 11 ], [ 543, 222 ], [ 1234, 7654 ] ]
console.log(digitsGrouper([1111, 1, 6, 5, 5, 555, 111, 11, 55, 5555])); // [ [ 1, 6, 5, 5 ], [ 11, 55 ], [ 555, 111 ], [ 1111, 5555 ] ]
console.log(digitsGrouper([])); // [ [], [], [], [] ]
console.log(digitsGrouper([0, 00, 000, 0000])); // [ [ 0, 0, 0, 0 ], [], [], [] ]

