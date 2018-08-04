/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/

/*
SET input WITH ANY STRING
SET huruf WITH "abcdefghijklmnopqrstuvwxyz " CONSTANT
SET h8bi WITH "!@#$%^&*()-+1234567890[]{} " CONSTANT
SET output WITH EMPTY STRING;
FOR EACH letter OF INPUT
  FOR EACH ARRAY INDEX alphabet IN huruf
    IF letter EQUAL TO huruf IN ALPHABET INDEX
      APPEND output WITH h8bi CHAR IN ALPHABET INDEX 
    ENDIF
  ENDFOR
ENDFOR

DISPLAY output;
*/

function encrypt(input) {
  const huruf = "abcdefghijklmnopqrstuvwxyz ";
  const h8bi = "!@#$%^&*()-+1234567890[]{} ";
  var output = "";
  for(var letter of input){
    for(var alphabet in huruf){
      if(letter === huruf[alphabet]){
        output+= h8bi[alphabet];
      }
    }
  }
  return output;
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2
