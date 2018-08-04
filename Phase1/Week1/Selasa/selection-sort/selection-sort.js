function selectionSort(arr){
	for(let i = 0 ; i < arr.length ; i++){
		let smallest = arr[i];
		let index = i;
		for(let j = i ; j < arr.length ; j++){
			if(smallest>arr[j]) {
				smallest = arr[j];
				index = j;
			} 
		}
		//swapping between the smallest and current i
		[arr[i],arr[index]] = [arr[index],arr[i]];
	}
	return arr;
}

console.log(selectionSort([33,2,52,106,73]));