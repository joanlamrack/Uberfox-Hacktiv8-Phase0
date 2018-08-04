//function generate random blocks in alphabets

function createNestedArr(jumlahRow, jumlahCol){
	let output = [];
	let buffer = [];
	for(let i = 1 ; i <= jumlahRow*jumlahCol ; i++ ){
		buffer.push(String.fromCharCode(97 + Math.floor(Math.random() * Math.floor(26))));
		if( !(i % jumlahCol) ){
			output.push(buffer);
			buffer = [];
		}
	}

	return output;
}

function checkVowelsInArray(randomAlphabetArr){
	const kamus  = "aiueo";
	let blocksWithVowels = 0;
	let blocksWithVowelsContent =[];

	for(let row = 0 ; row < randomAlphabetArr.length-2 ; row++){
		for(let column = 0 ; column< randomAlphabetArr[0].length-2 ; column++){

			let blockElementsWithVowel = 0;
			let blockElements = [
				randomAlphabetArr[row][column],
				randomAlphabetArr[row][column+1],
				randomAlphabetArr[row+1][column],
				randomAlphabetArr[row+1][column+1]
			];
			for(let blockElement of blockElements){
				if(kamus.indexOf(  blockElement ) !== -1) blockElementsWithVowel++ ;
			}
			if(blockElementsWithVowel === 4){blocksWithVowels++; blocksWithVowelsContent.push(blockElements.join(""));}
		}
	}
	return (blocksWithVowels ? `Banyak Blok yang ditemukan: ${blocksWithVowels}, dengan elemen ${blocksWithVowelsContent.toString()}`: "Tidak ada blok yang ditemukan");
}

var random = createNestedArr(10,10);

console.log(random);

var blockvowel = checkVowelsInArray(random);

console.log(blockvowel);