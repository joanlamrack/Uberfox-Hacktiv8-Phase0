# DOMINO CARD

> ⏰ Time Estimation: ~45 mins

Buatlah sebuah function bernama `domino` yang menerima satu parameter berupa number.
function `domino` akan membuat sebuah kotak dengan simbol `#` dengan panjang dan tinggi sesuai number parameter.
Kemudian, di bagian paling tengah dari kotak dituliskan kembali simbol `#` sepanjang sizenya dan setelah kotak terbagi
dua maka di masing-masing sub kotak pada bagian tengahnya dituliskan angka domino.



**NOTE ANGKA YANG BERADA DITENGAH SUB KOTAK ADALAH ANGKA RANDOM DARI ANGKA DOMINO (1-6)**

Contoh untuk input 9:
```javascript
*********
*       *
*   3   *
*       *
*********
*       *
*   5   *
*       *
*********
```

Contoh untuk input 10:
```javascript
**********
*        *
*    6   *
*        *
**********
**********
*        *
*    2   *
*        *
**********
```