//your code here
let arr1 = [23, 11, 8, 48, 183, 16, 54, 51, 1, 38, 5, 40, 57, 53, 17, 55]
let arr2 = [81, 56, 63, 55, 97, 74, 24, 12, 77, 59, 78, 38, 75, 75, 72, 47, 25, 85, 53, 69, 72, 80, 94, 62, 48]
let arr3 = [12, 24, 38, 47, 48, 53, 25]

function snaker(arr){
	let output = [];

	if((Math.sqrt(arr.length)%1===0)){
		// sort input
		let sortedArray = arr.sort((a,b)=> a-b);
		let buffer = [];
		for(let index = 0 ; index < sortedArray.length ; index++){
			buffer.push(sortedArray[index]);
			if(buffer.length === Math.sqrt(sortedArray.length)){
				output.push(buffer);
				buffer = [];
			}
		}

		for(let index = 0 ; index < output.length ; index++){
			if(index%2)output[index].reverse();
		}

		console.log(output);
	}
	else{
		console.log("Array tidak dapat di proses");
		console.log(output);
	}


}

// expectation
snaker(arr1)
/*
    [
        [ 1, 5, 8, 11 ],
        [ 38, 23, 17, 16 ],
        [ 40, 48, 51, 53 ],
        [ 183, 57, 55, 54 ]
    ]
    */

snaker(arr2)
/*
    [
        [ 12, 24, 25, 38, 47 ],
        [ 59, 56, 55, 53, 48 ],
        [ 62, 63, 69, 72, 72 ],
        [ 78, 77, 75, 75, 74 ],
        [ 80, 81, 85, 94, 97 ]
    ]
   */

snaker(arr3)
/*
        Array tidak dapat di proses
        []
    */