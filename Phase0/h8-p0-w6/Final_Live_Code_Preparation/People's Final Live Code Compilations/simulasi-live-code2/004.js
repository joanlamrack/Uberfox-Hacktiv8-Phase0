/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']


algortima:

-menghitung jumlah kata dengan melakukan iterasi words.length
   ---->membuat var jumlahKata=1
   --->jika words[i]===spasi maka jumlahKata++
   
-menghting total panjang kata dengan
   ---->membuat var splitKata=words.split(' ')
   ---->membuat var totalPanjangKata=0
   ---->melakukan iterasi pada array splitKata untuk menghtung total huruf di kalimat tersebut 
   
-mencari rata2 dengan tota/jumlah kata, hasil kemudia dibulatkan
-memcari kata yang melikui jumlah dengan rata2
  ---->membuat var output berbentuk array
  ---->melakukan iterasi di splitKata
  
       --->jika splitKata.length ===rata2
       --->push ke var output
-return output;       
*/

function averageLengthWord(words) {
  // Code here
  var jumlahKata=1;

  //hitung jumlah kata
  for(var i=0;i<words.length;i++) {
    if(words[i]===' ') {
      jumlahKata++
    }
  }
  //console.log(jumlahKata)
  var totalPanjangKata=0;
  var splitKata= words.split(' ');
  
  //hiting panjang kata
  for(var j=0;j<splitKata.length;j++) {
    totalPanjangKata+=splitKata[j].length ; 
  }
  console.log(totalPanjangKata)
  //rata-rata panjang kata
  var rata2= Math.round(totalPanjangKata/jumlahKata);
  
  var output=[];
  for(var k=0;k<splitKata.length;k++){
    if(splitKata[k].length===rata2) {
      output.push(splitKata[k]);
    }
  }
  return output;
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []
