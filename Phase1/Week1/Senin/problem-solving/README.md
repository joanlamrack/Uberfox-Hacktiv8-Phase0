# problem-solving

```
pseudocode

SET i WITH 0
SET tonoDays, antonDays, budiDays WITH 7

FOR i TO 31
	SET people_going WITH EMPTY ARRAY
	IF i EQUALS tonoDays
		PUSH " Tono" INTO people_going
		ADD 2 INTO tonoDays
	ENDIF
	IF i EQUALS antonDays
		PUSH " Anton" INTO people_going
		ADD 4 INTO antonDays
	ENDIF
	IF i EQUALS budiDays
		PUSH " Budi" INTO people_going
		ADD 5 INTO budiDays
	ENDIF

	IF i MOD 5 EQUAL 0
		DISPLAY "Tanggal " APPEND i APPEND " : Tempat Fitness Tutup"
	ELSE
		DISPLAY "Tanggal " APPEND i APPEND " : " APPEND CONVERT TO STRING(people_going);
	ENDIF
	INCREMENT i
ENDFOR 
```