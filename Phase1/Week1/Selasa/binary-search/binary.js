'use strict';

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
	//insertion sort
	for(let currentIndex = 1 ; currentIndex < arr.length ; currentIndex++){
		let keepcurrentvalue = arr[currentIndex];
		for(let beforeCurrent = currentIndex-1 ; beforeCurrent>=0 ; beforeCurrent--){
			if(arr[beforeCurrent]>keepcurrentvalue){
				[arr[beforeCurrent+1],arr[beforeCurrent]] = [arr[beforeCurrent],arr[beforeCurrent+1]];
			}
			if(arr[beforeCurrent-1]<keepcurrentvalue){
				break;
			}
		}
	}

	return arr;
}

function binary_search (search, array) {
	let middle = Math.trunc(array.length/2);
	while(!(middle === array.length)){
		if(search < array[middle]){
			if(middle === 0 && array[middle] !== search) break;
			middle-=Math.round(middle/2);
		}
		else if (array[middle] < search){
			if(middle === array.length && array[middle] !== search) break;
			middle+=Math.round(middle/2);
		}
		else{
			return middle;
		}
	}
	return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
console.log(arrayGenapSorted);
var arrayGanjilSorted = ownSort(testArrayGanjil);
console.log(arrayGanjilSorted);

// Driver code
console.log(binary_search(8, arrayGenapSorted));
console.log(binary_search(10, arrayGenapSorted));
console.log(binary_search(33, arrayGenapSorted));

console.log(binary_search(53, arrayGanjilSorted));
console.log(binary_search(3, arrayGanjilSorted));
console.log(binary_search(2, arrayGanjilSorted));

module.exports = {
  binary_search
};
