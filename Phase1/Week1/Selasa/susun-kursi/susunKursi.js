// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

"use strict";

function generateSeats(row) {
	let seats = [];
	for(let i=0; i<row; i++) {
		seats.push([]);
	}
	return seats;
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats);
	let row = 0;
	for(let i=0; i<arr.length; i++) {
		seats[row].push(arr[i]);
		if(row < 2) {
			row++;
		} else {
			row = 0;
		}
	}
	printSeats(seats);
}

function printSeats(seats) {
	for(let i=0; i<seats.length; i++) {
		console.log(`Baris ${i} : `, seats[i]);
	}
}

managePerson(["a","b","c","d","e","f","g","h","i","j"], 3);
