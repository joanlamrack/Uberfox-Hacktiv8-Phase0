/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
*/

function missingNumbers (numbers) {
  //sort numbers
  for(var a = 0; a < numbers.length; a++){
    var target = numbers[a]
    for(var b = a - 1; b >= 0 && (numbers[b] > target); b--){
      numbers[b+1] = numbers[b]
    }
    numbers[b+1] = target
  }
  
  var resultHasil = []
  var max = numbers[numbers.length-1]
  var min = numbers[0]
  var middle = numbers[2]

  // for(var i = min+1; i < max; i++){
  //   if(i < numbers[1]){
  //     resultHasil.push(i)
  //   } 
  //   else if(i > numbers[1] && i < max){
  //     resultHasil.push(i)
  //   }
  // }
  if(numbers.length > 3){
    for(var i = min+1; i < max; i++){
      if(i < numbers[1] || i > middle){
        resultHasil.push(i)
      } else if (i >= numbers[1] && i >= max){
        resultHasil.push(i)
      }
    }
  } else {
    for(var j = min+1; j < max; j++){
      if(j < numbers[1]){
        resultHasil.push(j)
      } else if(j > numbers[1] && j < max){
        resultHasil.push(j)
      }
    }
  }
  return resultHasil
}
//1, 5, 6, 7, 10
console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []
