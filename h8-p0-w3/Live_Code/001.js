/**
Buatlah sebuah PSEUDOCODE untuk kasus berikut:

Sebuah mobil sedang berjalan dengan kecepatan 80 km/jam.
Ketika mobil akan menanjak sebuah jalanan/jalur, kecepatan mobil akan berkurang
sesuai dengan kemiringan sudut dari jalan tersebut:
 - sudut kemiringan jalan 0-14 derajat maka kecepatan mobil tidak akan berkurang
 - sudut kemiringan jalan 15-29 derajat maka kecepatan mobil akan berkurang 10 km/jam
 - sudut kemiringan jalan 30-44 derajat maka kecepatan mobil akan berkurang 15 km/jam
 - sudut kemiringan jalan 45-50 derajat maka kecepatan mobil akan berkurang 25 km/jam

Tampilkan kecepatan mobil jika menghadapi tanjakan dengan sudut kemiringan tersebut
**/


//your alogritma/pseudocode here

SET speed EQUAL TO 80
SET angle WITH NUMBER 0-50

IF angle MORE OR EQUAL TO 0 AND angle LESS OR EQUAL TO 14 THEN 
	DISPLAY speed
ELSE IF angle MORE OR EQUAL TO 15 AND angle LESS OR EQUAL TO 29 THEN
	DISPLAY speed - 10
ELSE IF angle MORE OR EQUAL TO 30 AND angle LESS OR EQUAL TO 44 THEN
	DISPLAY speed - 15
ELSE IF angle MORE OR EQUAL TO 45 AND angle LESS OR EQUAL TO 50 THEN
	DISPLAY speed - 25