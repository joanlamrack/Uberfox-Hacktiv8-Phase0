//1. Menyusun Barisan Bintang
/*Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.*/

var rows1=5;

while(rows1>0){
  console.log('*');
  rows1--;
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
/* Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.*/

var row2=5;
var buffer;

for(counter=0; counter<row2; counter++){
  buffer="";
  for(counter2=0; counter2<row2;counter2++){
    buffer+="*";
  }
  console.log(buffer);
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
//Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

var rows3=5;
var buffer;

for( var counter = 0; counter < rows3; counter++){
  buffer='';
  for(inside_counter =0; inside_counter <= counter; inside_counter++){
    buffer+="*";
  }
  console.log(buffer);
}