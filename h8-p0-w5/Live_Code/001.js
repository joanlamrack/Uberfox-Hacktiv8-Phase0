/**
  Hapus Simbol

  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.

  RULES:
  - WAJIB MENGGUNAKAN algoritma / pseudocode
  - DILARANG menambahkan parameter baru
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX


**/

/*PSEUDOCODE

SET str WITH ANY STRING
SET output WITH EMPTY STRING

FOR EACH character in str
  IF UNICODE FROM character EQUAL OR MORE THAN 48 AND LESS THAN 58 OR UNICODE FROM character EQUAL OR MORE THAN 65 AND LESS THAN 91 OR UNICODE FROM character EQUAL OR MORE THAN 97 AND LESS THAN 123
    add character to output
  ENDIF
ENDFOR

DISPLAY output
*/

function hapusSimbol(str) {
  var output = ""
  for(var key in str){
    var UnicodeFromChar = str.charCodeAt(key);
    if((UnicodeFromChar >= 48 && UnicodeFromChar<58) || (UnicodeFromChar >= 65 && UnicodeFromChar<91) || (UnicodeFromChar >= 97 && UnicodeFromChar<123) ){
      output+=str[key];
    }
  }
  return output;
}


console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
