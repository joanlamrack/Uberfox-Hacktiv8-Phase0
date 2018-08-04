//002 

/*
    wajib pseudocode. 
    Jawaban pseudocode disini 

    PSEUDOCODE 

    SET param with ANY NUMBER

    SET output with EMPTY ARRAY

    IF param EQUALS 0
        DISPLAY "Invalid Input"
    ELSE
        SET i with 1
        SET buffer WITH EMPTY ARRAY
        SET letter WITH 97
        FOR i LESS OR EQUAL TO (CALCULATE param*param)
            APPEND CHARACTER UTF8 FROM letter TO buffer
            IF i MOD param EQUALS TO Zero
                APPEND buffer TO output;
                SET buffer WITH EMPTY ARRAY
            ELSE
                IF letter EQUALS 122
                    SET letter WITH 96
                ENDIF
            ENDIF
            INCREMENT i
            INCREMENT letter
        ENDFOR
        DISPLAY output
    ENDIF
    
*/

function soal2(param)
{
	var output = [];
	if(param === 0 ){
		return "Invalid Input";
	}
	else{
		for(var i = 1, buffer = [], letter = 97 ; i <= param*param ; i++, letter++){
        	buffer.push(String.fromCharCode(letter));
        	if(i % param === 0 ){
        		output.push(buffer);
        		buffer = [];
        	}
        	else{
        		if(letter === 122){
        			letter = 96;
        		}
        	}
        }
        return output;
	}
    
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input