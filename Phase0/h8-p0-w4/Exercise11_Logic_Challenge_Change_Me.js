//Exercise 11 Change Me

function changeMe(arr) {
	for(var i = 0 ; i< arr.length ; i++){
		var newPersonObj = {
			firstName: arr[i][0],
			lastName: arr[i][1],
			gender: arr[i][2],
			age: ( !(arr[i][3]) || arr[i][3]> (new Date()).getFullYear() ? "Invalid Birth Year" : (new Date()).getFullYear() - arr[i][3])
		};

		console.log((i+1)+". "+arr[i][0]+" "+arr[i][1]+":");
		console.log(newPersonObj);
	}
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""