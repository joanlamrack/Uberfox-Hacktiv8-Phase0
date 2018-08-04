//003

// Waktu : 17 menit 28 Detik

function soal3(param1)
{
	var output= [];
	var buffer = [];
	var writing = 1;
    for(var i = 1 ; i <= param1; i++){
    	for(var j = 1 ; j <= param1; j++){
    		buffer.push(writing);
    		writing++;
    	}
    	if ( i % 2 === 0) {
    		buffer.reverse();
    	}
    	output.push(buffer);
    	buffer=[];
    }
    return output;
}

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]
*/

console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]
*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]
*/