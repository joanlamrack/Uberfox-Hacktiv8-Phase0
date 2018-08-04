//Exercise 14 Most Frequent Largest Number

//Implements BubbleSort with Recursive Fashion
function sorting(arrNumber, n = arrNumber.length) {
	if(n === 1 || n === 0){
		return arrNumber;
	}
	else{
		for(var i = 0 ; i < n-1 ; i++){
			if(arrNumber[i] > arrNumber[i+1]){
				[arrNumber[i],arrNumber[i+1]] = [arrNumber[i+1],arrNumber[i]] 
			}	
		}

		return sorting(arrNumber, n-1);
	}
}

function getTotal(arrNumber) {
	var occurence = 0;

	if(arrNumber.length === 0){
		return '';
	}
	else{
		for (var j = arrNumber.length - 1 ; j >= 0; j--){
			if(arrNumber[j] === arrNumber[arrNumber.length-1]){
				occurence++;
			}
		}
		return 'angka paling besar adalah '+ arrNumber[arrNumber.length-1] +' dan jumlah kemunculan sebanyak '+ occurence +' kali';
	}
}

function mostFrequentLargestNumbers(arrNumber) {
	var listSort = sorting(arrNumber);
	var countHighest = getTotal(listSort);
	return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
	mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
