/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa huruf x / y / z
di dalam `str`.
Contoh ada di test cases

RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
 
*/

/*
SET str WITH ANY STRING
SET count WITH 0
FOR EACH char in str
	IF char EQUAL TO 'X' OR char EQUAL TO 'x' OR char EQUAL TO 'Y' OR char EQUAL TO 'y' OR char EQUAL TO 'Z' OR char EQUAL TO 'z'
		INCREMENT count
	ENDIF
END FOR 

DISPLAY (count OR "no" (if count EQUALS TO 0)) APPENDED WITH " virus" APPENDED WITH "es"(if more than one) APPENDED WITH " detected"

*/

function virusCheck (str) {
	var count = 0;

	for(var char of str){
		if(char === "X" || 
			char === "x" || char === "Y" || 
			char === "y" || char === "Z" || 
			char === "z"){
			count++;
		}
	}

	return (count === 0 ? "No" : count) + " virus"+(count > 1 ? "es" : "")+" detected";
}

console.log(virusCheck('qlD4MZax0raQqew')); // 2 viruses detected
console.log(virusCheck('HH0NBP1zRa')); // 1 virus detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy')); // 4 viruses detected
console.log(virusCheck('mjBgPlzks')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected
