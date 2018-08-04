//Rocket 

/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param)
{
	var width = param+2;
	var output = "";
    if(param % 2 === 0 ){
    	return "Invalid Input";
    }
    else{
    	for(var j = 0 ; j < param ; j++){
    		for(var i = 0 ; i < width ; i++){
	    		//if(i === 0 || i === width-1){
	    		//	output+= "\'";
	    		//}
	    		//else 
                if( i === Math.trunc(width / 2) || j === Math.trunc(param / 2)){
	    			output+= "*";
	    		}
	    		else{
	    			output+= " ";
	    		}
	    	}
	    	output+="\n";
    	}
    }
    return output;
}

console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input