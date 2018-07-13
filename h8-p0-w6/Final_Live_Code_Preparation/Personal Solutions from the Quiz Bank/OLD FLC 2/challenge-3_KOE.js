//Buat kelompok
// KOE
// RULES: WAJIB PSEUDOCODE

/*
	SET "studentArr" WITH ANY ARRAY OF STRING
	SET "output" WITH EMPTY ARRAY
	
	SET "i" WITH 0
	FOR LOOP FROM "i" TO CALCULATE(LENGTH OF "studentArr" - 1)
		IF studentArr ELEMENT CALCULATE("i"+1) IS NOT EXIST
			PUSH (studentArr ELEMENT "i" APPEND " dan Instruktur") INTO "output"
		ELSE
			PUSH (studentArr ELEMENT "i" APPEND " dan " APPEND studentArr ELEMENT "i") INTO "output"
		ENDIF
	ENDFOR 
	
	RETURN "output"
*/

function arrangePairs(studentArr){
	var output = [];

	for(var i = 0 ; i< studentArr.length ; i+=2){
		if(!studentArr[i+1]){
			output.push(studentArr[i]+" dan Instruktur");
		}
		else{
			output.push(studentArr[i]+" dan "+studentArr[i+1])
		}
	}

	return output;
}

console.log(arrangePairs(['Diky', 'Bambang', 'Handoko'])); //[ 'Diky dan Bambang', 'Handoko dan Instruksur' ]
console.log(arrangePairs(['Adhy', 'Akbar', 'Haidar', 'Juvenita'])); //[ 'Adhy dan Akbar', 'Haidar dan Juvenita' ]
console.log(arrangePairs(['Adhy'])); //[ 'Adhy dan Instruksur' ]
console.log(arrangePairs([])); //[]
