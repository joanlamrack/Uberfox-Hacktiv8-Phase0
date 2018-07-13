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
  var obj = {}
  var output = ''

  if(data.length === 0){
    return 'No participants'
  }

  for(var i = 0; i < data.length; i++){
    if(obj[data[i][1]] === undefined){
      obj[data[i][1]] = 1
    } else {
      obj[data[i][1]] += 1
    }
  }

  //mengeluarkan nilai dari object
  for(let kunci in obj){
    output += kunci + ": " + obj[kunci] + ", "
  }

  return output.slice(0, output.length-2)
  // return obj
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
//Japan: 1, United Kingdom: 1, USA: 1

console.log(participantsSummary([]));
// // No participants


