function reverseArr(arr){
	let reversedArr = [];

	for(let i = arr.length-1 ; i >= 0 ; i--){
		reversedArr.push(arr[i]);
	}

	return reversedArr;
}

function generateBoard(num){
	let output =[];
	let rowBuffer = [];
	for(let i = 1; i <= num*num ; i++){
		rowBuffer.push(i);
		if(rowBuffer.length % num === 0){
			if(output.length % 2 === 1){
				rowBuffer = reverseArr(rowBuffer);
			}
			output.push(rowBuffer);
			rowBuffer =[];
		}

	}

	return reverseArr(output);
}

console.log(generateBoard(15));