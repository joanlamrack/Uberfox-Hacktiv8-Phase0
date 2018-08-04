/**
Participants Summary
--------------------
Diberikan data dalam bentuk array multidimensi yang berisi
orang-orang yang akan ikut dalam Hackathon yang
diselenggarakan bulan depan.

Implementasikan function `participantsSummary` untuk
mengeluarkan laporan negara mana saja yang mengikuti
dan ada berapa orang yang mewakili negara tersebut.
Contoh ada di test cases


RULES
=====
- Dilarang menggunakan .map, .filter, .reduce

*/

function participantsSummary (data) {
  // Code disini
}

// Test cases
console.log(participantsSummary([
  ['Dimitri', 'Russia'],
  ['Heihachi', 'Japan'],
  ['Sergei', 'Russia'],
  ['Kazuya', 'Japan'],
  ['Hwoarang', 'South Korea'],
  ['Jin', 'Japan']
]));
// Russia: 2, South Korea: 1, Japan: 3

console.log(participantsSummary([
  ['Suzuka', 'Japan'],
  ['Steve', 'United Kingdom'],
  ['Paul', 'USA']
]));
// Japan: 1, United Kingdom: 1, USA: 1

console.log(participantsSummary([]));
// No participants
