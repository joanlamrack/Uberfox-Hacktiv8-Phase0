/*
================
Piramida Array
================
Name : ERITHIANA SISIJOAN

[INSTRUCTIONS]
piramidaArray adalah sebuah function yang menerima satu parameter berupa number.
function akan membuat array sebanyak number yang diberikan, dan akan mereturn urutan angka sebanyak angka tersebut di dalam array
Jika parameter tersebut berisikan 0 atau bukan angka, maka function akan mereturn angka 0

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.


[EXAMPLE]
piramidaArray(2)
output: [ [ 1 ] , [ 2, 2 ] ]

*/

function piramidaArray(number) {
	var output = [];
	var buffer = [];
	if(isNaN(Number(number)) || !number){
		return 0;
	}
	for(var i = 0 ; i < number ; i++){
		for(var j = 0 ; j < i ; j++){
			buffer.push(i);
		}
		output.push(buffer);
		buffer = [];
	}

	return output;
}

console.log(piramidaArray(2)); // [ [], [ 1 ] ]
console.log(piramidaArray(5)); // [ [], [ 1 ], [ 2, 2 ], [ 3, 3, 3 ], [ 4, 4, 4, 4 ] ]
console.log(piramidaArray('A')); // 0
console.log(piramidaArray(4)); // [ [], [ 1 ], [ 2, 2 ], [ 3, 3, 3 ] ]
console.log(piramidaArray(0)); // 0
