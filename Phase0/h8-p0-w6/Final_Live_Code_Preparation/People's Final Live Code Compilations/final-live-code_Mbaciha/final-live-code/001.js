/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..

/*
	PSEUDOCODE
	SET input WITH ARRAY OF CHARACTERS
	SET villain_got WITH 0
	SET lives WITH 3
	FOR EACH char IN input
		IF lives MORE THAN 0 AND char EQUAL TO "@"
			SET lives WITH CALCULATE (lives-1) 
		ELSE IF lives EQUAL TO 0 AND char EQUAL TO "@"
			RETURN  "Ooops, you die. You got "+ villain_got +" villains"
		ELSE IF char EQUAL TO "Villain"
			INCREMENT villain_got 
		ENDIF
	ENDIF 

	RETURN "Nice work, detective! You got all villains: "+ villain_got;
*/
