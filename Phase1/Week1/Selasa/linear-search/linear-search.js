function linearSearch(elemenToSearch, arr){
	for(let i = 0 ; i < arr.length ; i++){
		if(arr[i] === elemenToSearch) return i;
	}
	return -1;
}

function globalLinearSearch(elemenToSearch, arr){
	let found = [];
	for(let i = 0 ; i < arr.length ; i++){
		if(arr[i] === elemenToSearch) found.push(i);
	}
	return (found.length ? (found.length > 1 ? found : found[0]): -1);
}

console.log(globalLinearSearch(2,[3,4,3,5]));