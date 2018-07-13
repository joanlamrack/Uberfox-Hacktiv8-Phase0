/*

=======================
Initial Object Grouping
=======================

[INSTRUCTION]

Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama

{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

algo=
-membuat variable obj dengan tipe data objek
-menentukan key pada setiap objek dengan melakukan iterasi studentsArr.length
-menentukan properties untuk isi pada key
-return obj;

*/

function initialGrouping(studentsArr) {
  // your code here
  //tentuin key
  var obj={};
  for(var i=0;i<studentsArr.length;i++) {
    obj[studentsArr[i][0]]=[];
  }
  //tentuin properties
  for(var j=0;j<studentsArr.length;j++) {
    
      obj[studentsArr[j][0]].push(studentsArr[j]);
  }
return obj;  
}



console.log(initialGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/

console.log(initialGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/

console.log(initialGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/
