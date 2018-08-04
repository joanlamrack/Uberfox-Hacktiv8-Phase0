//Exercise 2 Naik Angkot

function naikAngkot(arrPenumpang) {
	rute = ['A', 'B', 'C', 'D', 'E', 'F'];
	var output = []

	if(arrPenumpang.length !== 0){

		for(var value of arrPenumpang){
			output.push({
				penumpang: value[0],
				naikDari: value[1],
				tujuan: value[2],
				bayar: (Math.abs(rute.indexOf(value[1])-rute.indexOf(value[2])))*2000
			})
		}

	}
	return output;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]