/**
Participants Summary
--------------------
Diberikan data dalam bentuk array multidimensi yang berisi
orang-orang yang akan ikut dalam Hackathon yang
diselenggarakan bulan depan.

Implementasikan function `participantsSummary` untuk
mengeluarkan laporan negara mana saja yang mengikuti,
ada berapa orang yang mewakili negara tersebut dan
nama peserta dari negara tersebut

Contoh ada di test cases
*/

function participantsSummary (data) {
  if(data.length === 0){
    return 'No participants'
  }

  var obj = {}
  var output = ''
  let arr = []

  //nama negara
  for(var a = 0; a < data.length; a++){
    if(obj[data[a][1]] === undefined){
      obj[data[a][1]] = {total: 0, nama: []}
    } else {
      obj[data[a][1]] = {total: 0, nama: []}
    } 
  }

  //jumlah orang setiap perwakilan negara
  for(var x = 0; x < data.length; x++){
    if(obj[data[x][1]].total === 0){
      obj[data[x][1]].total = 1
    } else {
      obj[data[x][1]].total += 1
    }
  }

  //nama orang setiap perwakilan negara
  for(var b = 0; b < data.length; b++){
    obj[data[b][1]].nama.push(data[b][0])
  }

  return obj

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
/*
{
  Russia: {
    total: 2,
    names: [ 'Dimitri', 'Sergei' ]
  },
  Japan: {
    total: 3,
    names: [ 'Heihachi', 'Kazuya', 'Jin' ]
  },
  'South Korea': {
    total: 1,
    names: [ 'Hwoarang' ]
  }
}
*/

console.log(participantsSummary([
  ['Suzuka', 'Japan'],
  ['Steve', 'United Kingdom'],
  ['Paul', 'USA']
]));
/*
{
  Japan: {
    total: 1,
    names: [ 'Suzuka' ]
  },
  'United Kingdom': {
    total: 1,
    names: [ 'Steve' ]
  },
  USA: {
    total: 1,
    names: [ 'Paul' ]
  }
}
*/

console.log(participantsSummary([]));
// No participants
