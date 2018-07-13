/*
================
Galon Checker
================
Name : ERITHIANA SISIJOAN 

[INSTRUCTIONS]
galonChecker adalah sebuah function yang menerima satu parameter berupa array of string.
function tersebut akan menghitung jumlah galon yang penuh (F), setengah penuh (H) dan galon kosong (E)
dan function akan mereturn jumlah masing2 jenis galon dan total galon secara keseluruhan.

Adapun ketentuannya:
Full (F) = 1
Half (H) = 1/2
Empty (E) = 0

[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
galonChecker(['F','H','F'])
output: jumlah F: 2, jumlah H: 1, jumlah E: 0. Dan totalnya adalah: 2.5
*/

/*
	SET array WITH ANY CHAR ARRAY
	SET full, half AND empty WITH 0

	IF LENGTH OF array IS NOT 0
		FOR EACH galon OF array
			IF galon EQUAL TO "F"
				ADD full BY 1
			ELSE IF galon EQUAL TO "H"
				ADD half BY 1
			ELSE
				ADD empty BY 1
			ENDIF
		ENDFOR 

		RETURN "jumlah F: " APPEND WITH full APPEND WITH ", jumlah H: " APPEND  WITH half  APPEND WITH ", jumlah E: " APPEND WITH empty APPEND WITH ". Dan totalnya adalah: " APPEND WITH CALCULATE (full+(half*0.5))

	ELSE
		RETURN "NO DATA"
	ENDIF

*/

function galonChecker(array) {
	var full = half = empty = 0;


	if(array.length){
		for(var galon of array){
			if(galon ==="F") full++;
			else if(galon ==="H") half++;
			else empty++;
		}

		return "jumlah F: "+full+", jumlah H: "+half+", jumlah E: "+empty+". Dan totalnya adalah: "+(full+(half*0.5));
	}
	else{
		return "NO DATA"
	}
}

console.log(galonChecker(['F','H','F']));
// jumlah F: 2, jumlah H: 1, jumlah E: 0. Dan totalnya adalah: 2.5
console.log(galonChecker(['H','H','F','F','E']));
// jumlah F: 2, jumlah H: 2, jumlah E: 1. Dan totalnya adalah: 3
console.log(galonChecker(['E','F','F','F','H']));
// jumlah F: 3, jumlah H: 1, jumlah E: 1. Dan totalnya adalah: 3.5
console.log(galonChecker(['E','H']));
// jumlah F: 0, jumlah H: 1, jumlah E: 1. Dan totalnya adalah: 0.5
console.log(galonChecker(['H','H','H','H']));
// jumlah F: 0, jumlah H: 4, jumlah E: 0. Dan totalnya adalah: 2
console.log(galonChecker([])); //NO DATA
