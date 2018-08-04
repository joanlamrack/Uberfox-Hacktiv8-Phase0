function in_words(num){
	const kamusSatuan=[
			[1000000000000, "trilyun"],
			[1000000000, "milyar"],
			[1000000, "juta"],
			[1000,  "ribu"],
			[100, "ratus"],
			[10,"puluh"]
		]

	const kamusAngkaNolHinggaSembilan =
	{
		10 : ["puluh", "belas"],
		9 : "sembilan",
		8 : "delapan",
		7 : "tujuh",
		6 : "enam",
		5 : "lima",
		4 : "empat",
		3 : "tiga",
		2 : "dua",
		1 : "satu"
	};
	if(num === 0){
		return "";
	}
	else if(num<10){
		return kamusAngkaNolHinggaSembilan[String(num)];
	}
	else if(num<20){
		return (num === 10 ? "se"+kamusAngkaNolHinggaSembilan["10"][0] : ((num-10).toString() === 1 ? "se": kamusAngkaNolHinggaSembilan[(num-10).toString()] +" ")+kamusAngkaNolHinggaSembilan["10"][1])
	}
	else{
		for(let satuan of kamusSatuan){
			if(num>=satuan[0]){
				let jumlahSatuan = Math.trunc(num/satuan[0]);
				return (jumlahSatuan === 1 ? "se": in_words(jumlahSatuan)+" ")+satuan[1] +" "+ in_words(num-(jumlahSatuan*satuan[0])); 
			}
		}
	}
}

console.log(in_words(4)); //"empat"
console.log(in_words(19)); // "sembilan belas"
console.log(in_words(27)); // "dua puluh tujuh"
console.log(in_words(102)); // "seratus dua"
console.log(in_words(38079)); // tiga puluh delapan ribu tujuh puluh sembilan"
console.log(in_words(82102713)); //delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas.
console.log(in_words(821027130621)); //delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas.