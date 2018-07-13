// Objects Competency Test
// 
// KOE
// FOX SCIENTIST
//  
// Sebagai Ilmuwan, kamu diberikan fasilitas yang dapat membuat mahluk rekayasa genetika.
// Alat yang sama dapat digunakan mengubah genetika makhluk yang sudah ada.
//
// Suatu hari atasanmu ingin mempunyai banyak Rubah (fox), dan setiap rubah ini dapat diberikan perintah.
//
// - Untuk membuat seekor Rubah, dua data diperlukan,yaitu jenis spesies dan makan favorit harus ada.
//   data ini harus dapat dipanggil.
// - Ketika diberikan perintah howl(), rubah akan menyebutkan jenis spesiesnya
// - Ketika diberikan perintah meet() dengan parameter rubah lainnya, akan menyapa rubah tsb.
//  jika mereka berasal dari spesies yang sama, sapaan : Hey brother!
//  jika tidak sama, sapaannya: "Hello nice to meet you"!
// - Demi penelitian, kamu juga menyisipkan perintah changeGenetics() untuk mengubah jenis species dari rubah tsb.
//
//  RULES:
//  - Hanya menggunakan Satu function
//  - Lihat test case.
//

function Fox(speciesParam, favouriteFoodParam) {
  this.speciesParam = speciesParam;
  this.favouriteFoodParam = favouriteFoodParam;
  this.howl = function(){
  	return "howl! I'm a"+speciesParam+"Fox !!!";
  }
  this.meet=function(OtherFox){
  	if(OtherFox.speciesParam === this.speciesParam){
  		return "hey brother!"
  	}
  	else{
  		return "hello nice to meet you"
  	}
  }

  this.changeGenetics = function(gen){
  	this.speciesParam = gen;
  }
}

var jakeTheFox = new Fox("Darwin", "Meat");
var mikeTheFox = new Fox("Ethiopian", "Meat");
var lukeTheFox = new Fox("Fire", "Grass");
var chrisTheFox = new Fox("Darwin", "Grass");

console.log(jakeTheFox.howl()); // howl! I'm a Darwin Fox !!!
console.log(mikeTheFox.howl()); // howl! I'm an Ethiopian Fox !!!
console.log(lukeTheFox.howl()); // howl! I'm a Fire Fox !!!

console.log(jakeTheFox.meet(mikeTheFox)); // hello nice to meet you
console.log(jakeTheFox.meet(chrisTheFox)); // hey brother!
console.log(mikeTheFox.meet(lukeTheFox)); // hello nice to meet you


jakeTheFox.changeGenetics('Ethiopian');
console.log(jakeTheFox.meet(chrisTheFox)); // hello nice to meet you
console.log(jakeTheFox.meet(mikeTheFox)); // hey brother!
