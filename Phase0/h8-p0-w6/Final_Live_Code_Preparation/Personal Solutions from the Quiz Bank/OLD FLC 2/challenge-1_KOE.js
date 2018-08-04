// Counting Fox Ears

// hint: Each fox has two ears.
// 
// RULES
// - No loop, Recursive only
// - Forbidden to use * math operation
// - PSEUDOCODE is required.
/*
	FUNCTION foxEars WITH PARAMETER foxs:number
	IF foxs EQUAL TO 0
		RETURN 0
	ELSE
		RETURN CALL foxEars WITH PARAMETER CALCULATE(foxs-1)
	ENDIF	
*/
function foxEars(foxs){
	if(foxs === 0){
		return 0;
	}
	else{
		return 2 + foxEars(foxs-1);
	}
}

console.log(foxEars(3)); // 6
console.log(foxEars(4)); // 8
console.log(foxEars(6)); // 12
console.log(foxEars(0)); // 0
