/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan

- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap

- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid

*/
/*
  STORE str WITH ANY STRING
  STORE output WITH 0
  STORE i WITH 0
  FOR LOOP FROM i AS LONG i IS LESS THAN str LENGTH, INCREMENT i BY 2 EVERY LOOP
    IF ELEMENT INDEX i FROM str APPENDED WITH ELEMENT INDEX i+1 FROM str AND THE BOTH ELEMENT FORMING EVEN NUMBER
      SET output WITH output + BOTH ELEMENT CONVERTED TO NUMBER 
    ELSE ELEMENT i+1 DONT EXIST && ELEMENT i WITH ELEMENT INDEX 0 FORMING EVEN NUMBER
      SET output WITH output + ELEMENT i WITH ELEMENT INDEX 0 CONVERTED TO NUMBER 
    ENDIF
  ENDFOR

  DISPLAY output
*/


function evenPairsSum (str) {
  var output = 0
  for(var i = 0; i < str.length ; i+=2){
    if(str[i+1] && Number(str[i]+str[i+1]) % 2 === 0){
      output+=Number(str[i]+str[i+1]);
    }
    else if(!str[i+1] && Number(str[i]+str[0]) % 2 === 0){
      output+=Number(str[i]+str[0]);
    }
  }
  return output;
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134
