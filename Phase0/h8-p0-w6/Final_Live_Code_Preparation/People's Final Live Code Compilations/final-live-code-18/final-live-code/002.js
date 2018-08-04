/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4 viruses detected

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3 viruses detected


RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

*/

/*
Algoritma:

1. cek, jika "str" sama dengan string kosong Atau "viruses" sama dengan string kosong Atau 'viruses' sama dengan undefined, maka kembalikan nilai string 'No virus detected'

2. buat variable baru dengan nama 'strToLowerCase' dengan nilai str.toLowerCase(), untuk mengubah huruf kapital menjadi huruf kecil
3. buat varibale baru dengan nama 'virusesToLowerCase' dengan nilai viruses.toLowerCase()
4. buat varibale baru dengan nama 'virusesToLowerCaseSplit' dengan nilai "virusesToLowerCase".split('|'), untuk menghapus tanda '|'.
5. buat variable baru lagi dengan nama 'count' dengan nilai 0
6. lakukan nested looping pada 'strToLowerCase' dan "virusesToLowerCaseSplit" sampai akhir nilai
  6a. jika 'strToLowerCase' index ke a sama dengan "virusesToLowerCaseSplit" index ke b, maka count bertambah satu
7. buat variable dengan namam "front" dengan nilai string 'virus'
8. buat variable dengan nama "back" dengan nilai string 'detected'
9. jika count lebih dari satu, maka "front" nilai nya diganti dengan string 'viruses'. jika tidak memenuhi lanjut step 10.
10. jika count sama dengan 1, maka 'front'. jika tidak memenuhi, lanjut step 11
11. maka kembalikan nilai string 'No virus detected'
12 kembalikan nilai count ditambah string 'front' ditambah string spasi ditambah string "back"
*/

function virusCheck (str, viruses) {

  if(str === '' || viruses === undefined){
    return 'No virus detected'
  } 

  var strToLowerCase = str.toLowerCase()
  var virusesToLowerCase = viruses.toLowerCase()
  var virusesToLowerCaseSplit = virusesToLowerCase.split('|')
  var count = 0

  for(var a = 0; a < strToLowerCase.length; a++){
    for(var b = 0; b < virusesToLowerCaseSplit.length; b++){
      if(strToLowerCase[a] === virusesToLowerCaseSplit[b]){
        count++
      } 
    }
  }

  if(count > 1){
    front = 'viruses'
  } else if(count === 1){
    front = 'virus'
  } else {
    return 'No virus detected'
  }

  return count + " " + front + " " + "detected"
  
}

console.log(virusCheck('qlD4MZax0raQqew', 'x|0|q')); // 5 viruses detected
console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3 viruses detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6 viruses detected
console.log(virusCheck('mjBgPlzks', 'm')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa', 'x')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected
