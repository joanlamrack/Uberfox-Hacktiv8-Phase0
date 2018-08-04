# EASY - REPEATED PATTERN

Buatlah sebuah function yang me-_return_ jumlah karakter yang paling banyak muncul dalam sebuah deret string.
kita bisa memasukan panjang karakter yang akan kita cari perulangannya.

```javascript
    // str adalah string yang akan kita cari perulangannya
    // length adalah jumlah karakter yang akan kita cari
    // misal length = 2, maka kita akan mencari perulangan yang berisikan 2 karakter contoh: 'ab'
    // length = 3, contoh: 'aba'
    function countChar(str, length){

    }
```


contoh, kita mencari perulangan yang paling sering muncul dengan panjang 3 karakter :
```javascript
    let str = "abacccccabacccceeeeddddabaeeeaba"
    let str2 = "kkkmmmmooonnoooommmmxxxppaaammmm"

    // case 1
    let result = countChar(str, 3)
    console.log(result) // "aba" - 4x

    // case 2
    let result = countChar(str, 1)
    console.log(result) // "c" - 9x

    // case 3
    let result = countChar(str2, 3)
    console.log(result) // "mmm" - 3x

    // case 4
    let result = countChar(str2, 1)
    console.log(result) // "m" - 12x
```
