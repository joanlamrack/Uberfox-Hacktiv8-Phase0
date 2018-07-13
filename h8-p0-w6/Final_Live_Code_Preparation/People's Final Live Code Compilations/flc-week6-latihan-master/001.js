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

/*Pseudocode
FUNCTION `encrypt` with parameter `input`
  STORE and SET `hurufBiasa` to 'abcdefghijklmnopqrstuvwxyz'
  STORE and SET `hurufH8BI` to '!@#$%^&*()-+1234567890[]{}'
  STORE and SET `result to ''

  FOR i = 0 to length of `input` - 1
    FOR j = 0 to length of `hurufBiasa` - 1
      IF `input` on i  EQUAL to `hurufBiasa` on j
        SET `result` = `result` + `hurufH8BI` on j
      ELSE
        SET `result` = `result`
      END IF
      j++
    END FOR
    IF `input` on i EQUAL to ' '
    SET `result` = `result` + ' '
    END IF
    i++
  END FOR
END FUNCTION
*/

function encrypt(input) {
  var hurufBiasa = 'abcdefghijklmnopqrstuvwxyz';
  var hurufH8BI =  '!@#$%^&*()-+1234567890[]{}';
  var result = '';

  for (var i = 0; i <= input.length - 1; i++) {
    for(var j = 0; j <= hurufBiasa.length - 1; j++) {
      if (input[i] === hurufBiasa[j]) {
        result = result + hurufH8BI[j];
      }
      else {
        result = result;
      }  
    }
    if (input[i] === ' ') {
      result = result + ' ';
    }
  }
  return result;
  // your code here
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2
