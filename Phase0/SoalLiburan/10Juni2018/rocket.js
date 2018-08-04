//Rocket

/*
    membuat bendera scotlandia
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param)
{
	var output = "";
    if(param % 2 === 0 ){
    	return "Invalid Input";
    }
    else{
    	for(var j = 0 , i = param - 1; j < param ; j++, i--){
    		for(var k = 0 ; k < param ; k++){
    			if(k === j || k === i){
    				output+="*";
    			}
    			else{
    				output+=" ";
    			}
    		}
    		output+= "\n";
    	}
    }
    return output;
}


console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/


console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/