//Exercise 13 Target Terdekat (version 3)

function targetTerdekat(arr) {
	var target = [];
	if (arr.indexOf('x') !== -1 && arr.indexOf('o') !== -1) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] !== ' ') {
				if (target.length == 0) {
					target.push(arr[i]);
					target.push(i);
				} else if (arr[i] !== target[0]) {
					return Math.abs(i - target[1]);
				} else {
					target[1] = i;
				}
			}
		}
	} else {
		return 0;
	}
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

