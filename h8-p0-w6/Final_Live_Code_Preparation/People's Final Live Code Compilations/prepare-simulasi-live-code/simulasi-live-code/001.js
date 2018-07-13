/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa huruf x / y / z
di dalam `str`.
Contoh ada di test cases

RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
 
*/

/*
Algoritma :
1. buat 3 variable baru, yang pertama "countX" dengan nilai 0, yang kedua 'countY' dengan nilai 0, dan yang ketiga 'countZ' dengan nilai 0.
2. lakukan iterasi pada string
  2a. jika pada string dengan index ke i sama dengan string huruf "x" kecil Atau string dengan index ke i sama dengan string huruf 'X' kapital, maka "countX" bertambah satu. jika tidak memenuhi, masuk step 2b.
  2b. jika pada string dengan index ke i sama dengan string huruf 'y' kecil Atau string dengan index ke i sama dengan string huruf 'Y' kapital, maka "countY" bertambah satu. jika tidak memenuhi, masuk step 2c.
  2c. jika pada string dengan index ke i sama dengan string huruf 'z' kecil Atau string dengan index ke i sama dengan string huruf 'Z' kapital, maka 'countZ' bertambah satu. 
3. buat variable baru dengan nama 'virusDetec' dengan nilai 'countX' ditambah 'countY' ditambah 'countZ'
4. jika 'virusDetec' lebih dari 0, maka kembalikan nilai 'virusDetec' ditambahkan string keterangan 'viruses detected'. jika tidak memenuhi masuk step 5.
5. kembalikan nilai string dengan keterangan 'No viruses detected'

*/

function virusCheck (str) {
  // var countX = 0
  // var countY = 0
  // var countZ = 0

  // for(var i = 0; i < str.length; i++){
  //   if(str[i].toLowerCase() === 'x' || str[i].toUpperCase() === 'X'){
  //     countX++
  //   } else if(str[i].toLowerCase() === 'y' || str[i].toUpperCase() === 'Y'){
  //     countY++
  //   } else if(str[i].toLowerCase() === 'z' || str[i].toUpperCase() === 'Z'){
  //     countZ++
  //   }
  // }

  // if(virusDetec > 1){
  //   return virusDetec + ' viruses detected'
  // } else if(virusDetec === 1){
  //   return virusDetec + ' virus detected'
  // } else {
  //   return 'No virus detected'
  // }
  
  var count = 0
  const word = str.toLowerCase()

  for(var i = 0; i < str.length; i++){
    if(word[i] === 'x' || word[i] === 'y' || word[i] === 'z'){
      count++
    }
  }
  
  var front = 'virus'
  var back = 'detected'

  if(count > 1){
    front = 'viruses'
  } else if(count === 1){
    front
  } else {
    return 'No ' + front + " " + back 
  }

  return count + " " + front + " " + back
  
}
console.log(virusCheck('qlD4MZax0raQqew')); // 2 viruses detected
console.log(virusCheck('HH0NBP1zRa')); // 1 virus detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy')); // 4 viruses detected
console.log(virusCheck('mjBgPlzks')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected



