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

function participantsSummary(data) {
  let obj = {}

  if(data.length === 0){
    return 'No Participants'
  }
  //pengelompokan sesuai negara
  for(let a = 0; a < data.length; a++){
    if(obj[data[a][1]] === undefined){
      obj[data[a][1]] = {total: 0, nama: []}
    } else {
      obj[data[a][1]] = {total: 0, nama: []}
    }
  }

  //mencari total orang sesuai negara
  //obj[data[b][1]] = key untuk negara
  //obj[data[b][1]].total = key total dari masing-masing negara
  for(let b = 0; b < data.length; b++){
    if(obj[data[b][1]].total === 0){
      obj[data[b][1]].total = 1
    } else {
      obj[data[b][1]].total += 1
    }
  }

  for(let c = 0; c < data.length; c++){
    obj[data[c][1]].nama.push(data[c][0])
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
