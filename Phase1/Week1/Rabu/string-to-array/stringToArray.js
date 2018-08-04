function stringToArray(str){
	let output = [];
	for(let word of str.split(",")){
		output.push(Array.from(word));
	}
	return output;
}

console.log( stringToArray("sqrst,ukaei,ffooo") );