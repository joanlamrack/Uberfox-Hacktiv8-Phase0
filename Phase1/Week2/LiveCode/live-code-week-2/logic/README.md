# SNAKER (SNAKE AND LADDER)

## Buat array 2 dimensi
Buatlah array 2 dimensi dari sebuah array 1 dimensi dengan ketentuan:
- nomor harus berurutan
- nomor bersambung dari atas kebawah dan sesuai dengan arah kolom sebelumnya

Panjang array 2 dimensi ditentunkan berdasarkan jumlah array 1 dimensi. misal:
- panjang array 1 dimensi adalah 16. maka array 2 dimensi adalah 4x4
- panjang array 1 dimensi adalah 25. maka array 2 dimensi adalah 5x5
- panjang array 1 dimensi adalah 36. maka array 2 dimensi adalah 6x6
- dan seterusnya

Jika array 1 dimensi tidak bisa dibuat panjang dan lebar yang sama, maka tampilkan pesan `Array tidak dapat di proses`

RULE:
DILARANG MENGGUNAKAN BUILT IN FUNCTION .SORT

```javascript
    let arr1 = [23, 11, 8, 48, 183, 16, 54, 51, 1, 38, 5, 40, 57, 53, 17, 55]
    let arr2 = [81, 56, 63, 55, 97, 74, 24, 12, 77, 59, 78, 38, 75, 75, 72, 47, 25, 85, 53, 69, 72, 80, 94, 62, 48]
    let arr3 = [12, 24, 38, 47, 48, 53, 25]

    function snaker(arr){
        // put your goddamn beautiful super good quality code here..
    }

    // expectation
    snaker(arr1)
    /*
    [
        [ 1, 5, 8, 11 ],
        [ 38, 23, 17, 16 ],
        [ 40, 48, 51, 53 ],
        [ 183, 57, 55, 54 ]
    ]
    */

   snaker(arr2)
   /*
    [
        [ 12, 24, 25, 38, 47 ],
        [ 59, 56, 55, 53, 48 ],
        [ 62, 63, 69, 72, 72 ],
        [ 78, 77, 75, 75, 74 ],
        [ 80, 81, 85, 94, 97 ]
    ]
   */

    snaker(arr3)
    /*
        Array tidak dapat di proses
        []
    */


```

![Contoh](https://i.imgur.com/jq9bGXi.png)
