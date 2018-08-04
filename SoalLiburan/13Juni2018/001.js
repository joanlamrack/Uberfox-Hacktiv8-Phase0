//001

function soal1(param)
{
	var output = [];
    for(var i = 1 ; i <= param ; i++){
    	var buffer = "";
		if(i  % 4 === 0){
    		buffer+= "Fizz";
    	}
    	if(i % 7 === 0){
    		buffer+= "Buzz";
    	}
    	output.push(buffer);
    }
    return output;
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']
