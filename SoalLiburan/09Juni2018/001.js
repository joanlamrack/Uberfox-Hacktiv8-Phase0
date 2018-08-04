//Soal 1

function soal1(param)
{
	var seed = []

	if(param <= 0){
		return "Invalid Input"
	}
	else{
		for(var i = 0 ; i < param; seed.push(''), i++);
	    if (seed.length % 2 === 0) {
			seed[seed.length / 2 - 1] = "*"
			seed[seed.length / 2] = "*"
		} else {
			seed[Math.trunc(seed.length / 2)] = "*";
		}
	}
	return seed;

}

// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']