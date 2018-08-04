//soal 3

function soal3(param)
{
	var output = [];
	var buffer = [];
    for(var i = 1 ; i <= param*param ; i++){
    	buffer.push(i);
    	if(i % param === 0){
    		output.push(buffer);
    		buffer = [];
    	}
    }

    return output;
}

console.log(soal3(5)) 
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/

console.log(soal3(4))

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/