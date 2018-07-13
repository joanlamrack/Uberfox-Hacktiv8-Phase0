// Array 1 Competency Test
//
// RULES(KOE)
// - Gunakan pseudocode sebelum mengerjakan soal!
// - Tidak boleh menggunakan function built-in array, kecuali push 


/*
PSEUDOCODE

STORE numberArr WITH ANY ARRAY OF NUMBERS
STORE output WITH EMPTY ARRAY
STORE i WITH 0
FOR LOOP WHILE i IS LESS THAN numberArr ARRAY LENGTH, INCREMENT i EVERY LOOP
	IF i EQUAL TO 0
		APPEND output WITH (CALCULATE ELEMENT i ADDED WITH ELEMENT i + 1)
	ELSE IF i EQUAL TO numberArr ARRAY LENGTH MINUS 1
		APPEND output WITH (CALCULATE ELEMENT i ADDED WITH ELEMENT i - 1)
	ELSE
		APPEND output WITH (CALCULATE ELEMENT i ADDED WITH ELEMENT i - 1 ADDED WITH ELEMENT i + 1)
	ENDIF
ENDFOR

RETURN output;
*/

function numberCruncher(numberArr) {
	var output=[];
	for(var i = 0 ; i < numberArr.length ; i++){
		if (i === 0){
			output.push(numberArr[i]+numberArr[i+1]);
		}
		else if( i === numberArr.length-1){
			output.push(numberArr[i]+numberArr[i-1]);
		}
		else{
			output.push(numberArr[i]+numberArr[i-1]+numberArr[i+1]);
		}
	}
	return output;
}

console.log(numberCruncher([7, 1, 0, 4])); // [ 8, 8, 5, 4 ]
console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // [ 5, 6, 8, 6, 10, 6, 8, 3 ]
console.log(numberCruncher([1, 3, 2, 5, 6, 0])); // [ 4, 6, 10, 13, 11, 6 ]
console.log(numberCruncher([0, 1, 0, 1, 0, 1, 0, 1, 0, 1])); // [ 1, 1, 2, 1, 2, 1, 2, 1, 2, 1 ]
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // [ 9, 17, 23, 18, 12, 6, 5 ]
