function dictionarySort(arr){
	const kamus = Array.from("abcdefghijklmnopqrstuvwxyz");

	for(let currentIndex = 1 ; currentIndex < arr.length ; currentIndex++){
		let keepcurrentvalue = arr[currentIndex];
		for(let beforeCurrent = currentIndex-1 ; beforeCurrent>=0 ; beforeCurrent--){
			for(let i = 0 ; i < arr[beforeCurrent].length ; i++){
				if(arr[beforeCurrent][i]!==keepcurrentvalue[i]){
					if(kamus.indexOf(arr[beforeCurrent][i])>kamus.indexOf(keepcurrentvalue[i])){
						[arr[beforeCurrent+1],arr[beforeCurrent]] = [arr[beforeCurrent],arr[beforeCurrent+1]];
					}
					break;
				}
			}
		}
	}

	return arr;
}

console.log(dictionarySort(["makan", "duduk", "terbang", "tidur"]));

console.log(dictionarySort(["angga", "ani", "adi", "anggi"]));