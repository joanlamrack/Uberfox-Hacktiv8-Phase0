function checkifPalindromeforStringAndArray(ArrayorStringInput) {
	var checkFromStartIndex = 0;
	var checkFromEndIndex = ArrayorStringInput.length - 1;
	while (
		checkFromEndIndex !== checkFromStartIndex ||
		checkFromStartIndex + 1 == checkFromEndIndex
	) {
		if (
			ArrayorStringInput[checkFromStartIndex] !==
			ArrayorStringInput[checkFromEndIndex]
		) {
			return false;
		}
		checkFromEndIndex--;
		checkFromStartIndex++;
	}
	return true;
}

function manualSplit(inputStringorNumber, separatorInString = '') {
	var output = [];
	if (separatorInString === '') {
		for (var i = 0; i < String(inputStringorNumber).length; i++) {
			output[i] = String(inputStringorNumber)[i];
		}
		return output;
	} else {
		buffer = '';
		var index = 0;
		for (var i = 0; i <= String(inputString).length; i++) {
			console.log(i);
			if (i == String(inputString).length) {
				//console.log("last index!");
				output[index] = buffer;
			} else if (inputString[i] === separatorInString) {
				//console.log('one batch is done');
				output[index] = buffer;
				index++;
				buffer = '';
			} else {
				buffer += inputString[i];
			}

			console.log('final ' + output);
		}
		return output;
	}
}

function manualJoin(ArrayInput, separator = '') {
	var buffer = String(ArrayInput[0]);
	for (var i = 1; i < ArrayInput.length; ++i) {
		buffer += String(separator + ArrayInput[i]);
	}
	return buffer;
}

function manualReverse(ArrayInput) {
	var buffer = [];
	var index = 0;
	for (i = ArrayInput.length - 1; i >= 0; i--) {
		buffer[index] = ArrayInput[i];
		index++;
	}
	ArrayInput = buffer;
	return buffer;
}

function manualPush(ArrayInput, itemToBePushed) {
	ArrayInput[ArrayInput.length] = itemToBePushed;
	return ArrayInput.length;
}

function manualPop(ArrayInput) {
	var removed = ArrayInput[ArrayInput.length - 1];
	ArrayInput.length = ArrayInput.length - 1;
	return removed;
}

console.log(manualSplit('hey you hahahaha'));
console.log(manualSplit(12341234));
var oi = manualSplit('21-05-2007');
console.log(oi);
console.log(manualJoin(oi, '/'));
console.log(checkifPalindromeforStringAndArray('katak'));
var arr = [1, 2, 3, 4];
console.log(arr);
console.log(manualPop(arr));
console.log(arr);
console.log(manualPush(arr, 2));
console.log(arr);
console.log(manualReverse(arr));
