/*['sergei', 'jin'], ['jin', 'steve', 'bryan']

1. Aku punya 2 array dan akan dilooping. aku ingin kedua array tersebut menjadi satu array, dengan ketentuan nilai dari masing-masing array tersebut tidak boleh ada yang sama. 
2. aku membutuhkan 2 variable baru untuk penampung dan jumlah nilai yang sama, aku berinama variable untuk penampung yaitu "hasilAkhir" dengan nilai array kosong., dan untuk jumlah nilai yang sama yaitu 'nilaiSama' dengan nilai 0
2. sekarang saya akan lakukan looping pertama untuk array 2. dimana array 2 ini akan aku bandingkan dengan array 1 untuk mengecek apakah nilai array 2 ada yang sama atau tidak dengan nilai array 1. saya melakukan looping ini dimulai dari index i = 0 sampai akhir nilai didalam array 2. 
	2a. selanjutnya saya lakukan looping kedua untuk array 1. saya akan looping dengan index j = 0 sampai akhir nilai didalam array 1. selanjutnya masuk step 2.a.1
		2.a.1. sekarang saya akan mengecek nilai array 2 dengan array 1, apakah ada yang sama, atau tidak. jika nilai array 2 sama dengan array 1, maka masuk ke step 2a.1.1.

			2.a.1.1 tampung nilai yang sama ke variable 'nilaiSama' dan tambah 1, jika ada nilai yang sama lagi. jadi setiap ada nilai yang sama, maka variable 'nilaiSama' sama ini akan selalu bertambah satu.

	2b. jika jumlah 'nilaiSama' = 0, maka masukkan nilai array 2 kedalam variable 'hasilAkhir'
*/

function arrayMerge (firstData, secondData) {
	var hasilAkhir = []
	var nilaiSama = 0

	for(var i = 0; i < secondData.length; i++){
		//console.log(secondData[i])
		for(var j = 0; j < firstData.length; j++){
			//console.log(firstData[j])
			if(secondData[i] === firstData[j]){
				nilaiSama++
			}
			if(nilaiSama === 0){
				hasilAkhir.push(secondData[i])
			}
		}
	}
	
	return hasilAkhir
	
}

// Test cases

//console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

 console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// // ['sergei', 'jin', 'steve', 'bryan']
