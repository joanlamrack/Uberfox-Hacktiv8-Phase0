//Exercise 2

function balikString(InputString){
	var buffer =[];

	for(var i=InputString.length-1; i>=0; i--){
		buffer.push(InputString[i]);
	}

	return buffer.join('');
}

console.log(balikString("YOI"));