//rocket

function persegi(param1,param2)
{
	var output = "";
    if(param1 === 0 || param2 === 0){
    	return "Invalid value";
    }
    else{
    	for(var i = 0 ; i < param2 ; i++){
    		for(var j = 0 ; j < param1; j++){
    			if( j === 0 || j === param1-1 || i === 0 || i === param2-1){
    				output+= "#";
    				if( j === param1-1 && i !== param2-1){
    					output+= "\n";
    				}
    			}
    			else{
    				output+= " ";
    			}

			}
    	}

    }
    return output
}

console.log(persegi(5,7))

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

console.log(persegi(6,3))

/*
    ######
    #    #
    ######
*/


console.log(persegi(0,7)) // invalid value 
console.log(persegi(4,0)) // invalid value 