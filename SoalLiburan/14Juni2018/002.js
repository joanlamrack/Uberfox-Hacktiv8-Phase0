//002

// Waktu: 17 Menit 18 detik

function soal2(param)
{
	var output = [];
    if(param % 2 === 0){
    	return "invalid input";
    }
    else{
    	var buffer = [];
    	for(var k = 0 ; k < param ; k++, buffer.push(""));
    	for(var i = Math.trunc(param/2), j = Math.trunc(param/2); i >= 0 ; i--, j++){
    		buffer[i] = buffer[j] = "*";
    		output.push(buffer.slice());
    	}

    }
    return output;
}

console.log(soal2(5))
/*
  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input