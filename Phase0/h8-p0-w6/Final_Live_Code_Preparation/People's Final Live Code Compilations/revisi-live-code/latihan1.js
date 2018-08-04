INPUT -> [70, 40, 76, 30, 87, 13, 12, 90, 12, 100, 90]

OUTPUT:
nilaiDibawah75 -> [70, 40, 30, 13, 12, 12]
nilaiDiatas75 -> [76, 87, 90, 100, 90]

1. aku punya array dan akan dilooping, dan akan dikelompokkan menjadi dua array, yaitu array yang pertama dengan nilai Dibawah 75 dan array kedua dengan nilai Diatas 75
2. aku buat 2 variabel penampung untuk nilai kurang dari 75 aku berinama nilaiDibawah75 dengan nilai array kosong, dan variabel untuk nilai lebih dari 75 aku berinama nilaiDiatas75 dengan nilai array kosong
3. sekarang aku lakukan proses looping nilai sampai akhir nilai
	3a. jika nilai dibawah 75, maka nilainya masukkan ke array nilaiDibawah75, jika tidak lanjut step 3b.
	3b. jika nilai diatas 75, maka nilainya masukkan ke array nilaiDiatas75.

STORE 'nilaiDibawah75' with []
STORE 'nilaiDiatas75' with []
FOR i = 0 TO (length OF 'nilai' - 1)
	IF 'nilai' index of i < 75
		SET 'nilaiDibawah75' with value 'nilai' index of i
	ELSE IF 'nilai' index of i > 75
		SET 'nilaiDiatas75' with value 'nilai' index of i
	END IF
END FOR