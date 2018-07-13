/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4 viruses detected

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3 viruses detected


RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

*/

/*
SET output WITH "";
SET str WITH ANY STRING
SET viruses WITH VIRUSES STRING, SEPARATED BY "|"
SET count WITH 0;
IF viruses AND str NOT EMPTY
	CONVERT viruses INTO ARRAY WITH "|" AS SEPARATOR
	FOR EACH letter IN str
		FOR EACH virus IN viruses
			IF letter EQUAL TO virus
				INCREMENT count
			ENDIF
		ENDFOR 
	ENDFOR
ENDIF


IF count IS NOT EMPTY
	APPEND output WITH count
ELSE
	APPEND output WITH "No"
ENDIF

APPEND output WITH " virus"

IF count IS MORE THAN 1
	APPEND output WITH "es"
ELSE
	NO APPEND
ENDIF

APPEND output WITH " detected"


*/

function virusCheck (str, viruses) {
	var count = 0;
	if(viruses && str){
		viruses = viruses.split("|");
		for(var letter of str){
			for(var virus of viruses){
				if(letter === virus){
					count++;
				}
			}
		}
	}
	return (count? count : "No") +" virus"+(count > 1 ? "es":"")+" detected"; 
}

console.log(virusCheck('qlD4MZax0raQqew', 'x|0|q')); // 5 viruses detected
console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3 viruses detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6 viruses detected
console.log(virusCheck('mjBgPlzks', 'm')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa', 'x')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected
