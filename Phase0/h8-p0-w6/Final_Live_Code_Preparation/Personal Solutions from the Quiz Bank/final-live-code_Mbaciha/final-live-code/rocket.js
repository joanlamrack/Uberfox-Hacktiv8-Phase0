/*
**************
FASTEST CLIMBER
**************
Fastest climber adalah sebuah function yang menerima sebuah parameter berupa string.
Dimana pada string tersebut, terdapat nama nama pemanjat tebing, dan waktu nya dalam bentuk jam dan menit.
Function dibawah akan mereturn nama pemanjat tebing tercepat.

RULES:
 - DILARANG menggunakan REGEX
 - DILARANG menggunakan muilt in function .reduce(), .map(), .filter()
 - DILARANG menggunakan built in function .indexOf(), dan .include()
 - DILARANG menggunakan built in function .split()

*/
function getName(str){
	var name = "";
	for(var letter of str){
		if(letter === ":"){
			break;
		}else{
			name+=letter;
		}
	}
	return name;
}

function getTime(str){
	var number = "";
	for(var letter of str){
		if(!isNaN(Number(letter)) && letter !== " "){
			number+=letter;
		}
	}
	return Number(number);
}

function getSeparateByComa(str){
	var output = [];
	var buffer = "";
	for (var letter of str){
		if(letter===","){
			output.push(buffer);
			buffer=""
		}
		else{
			buffer+=letter;
		}
	}
	output.push(buffer);

	return output;
}

function fastestClimber (string) {
	var arr = getSeparateByComa(string);
	var fastest;

	for(var participant of arr){
		if(!fastest){
			fastest = [getName(participant), getTime(participant)];
		}
		else{
			if(fastest[1]> getTime(participant)){
				fastest = [getName(participant), getTime(participant)];
			}
		}
	}

	return fastest[0];

}

console.log(fastestClimber('Kyle: 1jam 30menit,Nein: 2jam 30menit,Light: 0jam 59menit')) // Light
console.log(fastestClimber('Retsu: 1jam 30menit,Tokichi: 2jam 01menit,Go: 1jam 59menit')) // Retsu
console.log(fastestClimber('Awtian: 1jam 01menit,Pipu: 1jam 11menit,Caca: 1jam 59menit')) // Awtian
