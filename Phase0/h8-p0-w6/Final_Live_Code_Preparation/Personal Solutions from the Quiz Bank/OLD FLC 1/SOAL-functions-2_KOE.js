// Function 2 Competency Test
//
//  KOE 
//  String Manipulator
//  
//  Oh tidak! skynet baru saja membobol transmisi Resistance. Kamu sebagai anggota IT Resistance,
//  ditugaskan untuk menambah dan mengubah algoritma enkripsi milik resistance.
//
//  Permintaan:
//  - Rubah semua "-" menjadi spasi 
//  - Setiap huruf awal kata menjadi huruf besar
//  - RUbah huruf i menjadi 1, e menjadi 3, s menjadi 5, o menjadi 0, dan a menjadi 4
// 
// Lihat test case.



function stringManipulator(str) {
	return str.split("-").join(" ").split(" ").map(x=> x[0].toUpperCase()+x.slice(1)).join(" ").split("").map(function(x){
		if(x === "i" || x ==="I"){
			return "1"
		}
		else if(x === "e" || x ==="E"){
			return "3"
		}
		else if(x === "a" || x ==="A"){
			return "4"
		}
		else if(x === "s" || x === "S"){
			return "5"
		}
		else if(x === "o" || x ==="O"){
			return "0"
		}
		else if(x === "A" || x ==="a"){
			return "4"
		}
		else{
			return x;
		}
	}).join("")
}

console.log(stringManipulator("Hello-world,-tHis-IS-aN-eXAMple-seNTence"));
// H3ll0 W0rld, Th15 15 4n 3x4mpl3 53nt3nc3

console.log(stringManipulator("lORem-IpSUM DolOR sIt-AmeT"));
// L0r3m 1p5um D0l0r 51t 4m3t

console.log(stringManipulator("d1s i5-v3Ry e4sy-I can-do th1s"));
// D15 15 V3ry 345y 1 C4n D0 Th15
