//Exercise 4 Mencari Modus

function cariModus(arr) {
	var output = [];
	var max = [,0];
	for(var value of arr){
		var found = false;
		for(var i = 0; i< output.length ; i++){
			if(value === output[i][0]){
				output[i][1]+=1;
				found = true;
			}
		}
		if(!found){output.push([value, 1]); }
	}
	for(var i = 0 ; i < output.length ; output[i][1]>max[1]&&(max = output[i]),i++);
	if(output[0][1] === arr.length|| max[1]===1){
		return -1;
	}
	return max[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1