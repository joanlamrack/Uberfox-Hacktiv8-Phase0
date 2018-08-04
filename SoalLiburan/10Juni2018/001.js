//Soal satu

/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode
    PSEUDOCODE HERE : 

SET param with any number
SET output with EMPTY ARRAY
SET i WITH 0
SET j WITH i PLUS 1
SET k WITH j PLUS 1

IF param EQUALS 0
	DISPLAY "Invalid Input"
ELSE
	FOR LOOP FROM i UNTIL param
		IF i EQUALS k
			INSERT '#' TO output
			INCREMENT k BY 3
		ELSE IF i EQUALS j
			INSERT '@' TO output
			INCREMENT j BY 3
		ELSE
			INSERT '!' TO output
		ENDIF

		INCREMENT i
	END FOR 

	DISPLAY output
ENDIF

*/
function soal1(param)
{
	var output = [];

	if (param !==0){
		for( var i = 0 , j = i+1 , k = j+1; i < param; i++){
	    	if( i === k){
	    		output.push('#');
	    		k+=3;
	    	}
	    	else if (i === j){
	    		output.push('@');
	    		j+=3;
	    	}
	    	else{
	    		output.push('!');
	    	}
	    	
	    }
	    return output;
	}
	else{
		return 'Invalid Input';
	}
   
    
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(15));
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input