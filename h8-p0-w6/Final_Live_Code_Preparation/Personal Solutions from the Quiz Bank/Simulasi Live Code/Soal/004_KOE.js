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
	var output_STR =""
	var output = {};
	if(data.length === 0){
		return "No Participants"
	}
	else{
		for(var person of data){
			if(!output[person[1]]){
				output[person[1]]= 1;
			}
			else{
				output[person[1]]++;
			}
		}
	}
	for(var person_str in output){
		output_STR+=person_str+": "+output[person_str]+", ";

	}
	output_STR= output_STR.slice(0, output_STR.length-2);
	return output_STR;
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