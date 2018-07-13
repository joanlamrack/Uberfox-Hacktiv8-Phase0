// Recursive Competency Test

// Untuk Setiap Angka yang dimasukkan, setiap digit akan saling ditambahkan hingga menjadi satu digit saja
// Contoh input 1238 => 1+2+3+8 = 14 => 1+4 = 5
// output = 5.

// RULES
// - Wajib menggunakan rekursif.

function tambahTerus(num) {
  if(num <= 9){
  	return num
  }
  else{
  	//console.log(Number(num.toString()[0]));
  	return tambahTerus(Number(num.toString()[0]) + tambahTerus(Number(num.toString().slice(1))))
  }
}


console.log(tambahTerus(13)); // 4
console.log(tambahTerus(54)); // 9
console.log(tambahTerus(123)); // 6
console.log(tambahTerus(5)); // 5
console.log(tambahTerus(1234)); // 1
console.log(tambahTerus(99)); // 9
console.log(tambahTerus(88888888)); // 1
console.log(tambahTerus(333)); // 9
