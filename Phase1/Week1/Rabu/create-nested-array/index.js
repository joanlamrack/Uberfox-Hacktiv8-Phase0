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

console.log(createNestedArr(5, 3));